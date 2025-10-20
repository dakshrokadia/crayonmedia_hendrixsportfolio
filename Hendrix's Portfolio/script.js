// /Hendrix's Portfolio Site/script.js

// NOTE: This version uses the native browser 'fetch' function, which eliminates 
// "Cannot use import statement outside a module" and other client library errors.

// ----------------------------------------------------------------------
// 1. SUPABASE CLIENT SETUP
// ----------------------------------------------------------------------
const SUPABASE_URL = 'https://kvwrurvdqjywlfamgppz.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2d3J1cnZkcWp5d2xmYW1ncHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDAzMDQsImV4cCI6MjA3NjQ3NjMwNH0.BCMW-5Tf81ERShDSWGGBdsz56K11COtKHocyfV7qaxY';
// ----------------------------------------------------------------------

// Base URL for all Supabase API calls
const SUPABASE_API_BASE = `${SUPABASE_URL}/rest/v1/`;

// These are the standard options we send with every request to Supabase.
// It tells the API who we are (using the API key).
const fetchOptions = {
    method: 'GET',
    headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json' 
    }
};

// ----------------------------------------------------------------------
// 2. SUPABASE DATA FETCH FUNCTIONS
// ----------------------------------------------------------------------

/**
 * Fetches the details for a specific collection from the database.
 * @param {string} slug The collection slug from the URL (e.g., 'cars').
 */
async function fetchCollectionDetails(slug) {
    // We encode the slug to make sure it's safe for a URL.
    const encodedSlug = encodeURIComponent(slug);
    
    // --- FIX: The 'collection' table does not have a 'description' column. ---
    // I've removed 'description' from the 'select' query to prevent the 400 error.
    // We're now only asking for the 'title' and 'id' columns, which exist.
    const collectionUrl = `${SUPABASE_API_BASE}collection?slug=eq.${encodedSlug}&select=title,id`; 
    
    const collectionResponse = await fetch(collectionUrl, fetchOptions);
    
    // If the request wasn't successful, stop here and show an error.
    if (!collectionResponse.ok) {
        throw new Error(`Collection fetch failed with status: ${collectionResponse.status}`);
    }
    
    const collectionData = await collectionResponse.json();

    // If we didn't get any data back, it means the collection doesn't exist.
    if (!collectionData || collectionData.length === 0) {
        return null; 
    }

    // Grab the details from the first (and only) result.
    const collectionTitle = collectionData[0].title;
    const collectionId = collectionData[0].id; 
    
    // Now, fetch all the projects that belong to this collection using its ID.
    // We're asking for specific columns from the 'project' table.
    const projectsUrl = `${SUPABASE_API_BASE}project?collection_id=eq.${collectionId}&order=date_completed.desc&select=title,slug,date_completed,main_image_url`;
    
    const projectsResponse = await fetch(projectsUrl, fetchOptions);

    if (!projectsResponse.ok) {
        throw new Error(`Projects fetch failed with status: ${projectsResponse.status}`);
    }

    const projectsData = await projectsResponse.json();

    // Finally, package up the collection title and its projects to send back.
    return {
        title: collectionTitle,
        id: collectionId,
        projects: projectsData.map(p => ({
            // The database uses snake_case (e.g., date_completed), but JavaScript
            // usually uses camelCase (e.g., dateCompleted). We map them here.
            title: p.title,
            slug: p.slug,
            dateCompleted: p.date_completed,
            mainImageURL: p.main_image_url,
        }))
    };
}


/**
 * Fetches ALL collections for the homepage grid.
 */
async function fetchAllCollections() {
    const collectionsUrl = `${SUPABASE_API_BASE}collection?select=title,slug`;
    const response = await fetch(collectionsUrl, fetchOptions);
    
    if (!response.ok) {
        throw new Error(`Collections fetch failed with status: ${response.status}`);
    }
    
    const collectionsData = await response.json();
    
    // Reformat the data slightly to include a direct URL for the links.
    return collectionsData.map(c => ({
        title: c.title,
        url: `collection.html?slug=${c.slug}`
    }));
}


/**
 * Fetches the details for a single project from the database.
 * @param {string} slug The project slug from the URL (e.g., 'bmw-m4').
 */
async function fetchProjectDetails(slug) {
    const encodedSlug = encodeURIComponent(slug);
    
    // This query gets all the main details for one project.
    const projectUrl = `${SUPABASE_API_BASE}project?slug=eq.${encodedSlug}&select=title,description,main_image_url,gallery_images,collection_id`;
    
    const response = await fetch(projectUrl, fetchOptions);
    if (!response.ok) {
        throw new Error(`Project details fetch failed with status: ${response.status}`);
    }
    
    const projectData = await response.json();
    const project = projectData[0] || null;

    if (!project) return null;

    // We also need to know the parent collection's slug to create the "Back" button link.
    const collectionResponse = await fetch(`${SUPABASE_API_BASE}collection?id=eq.${project.collection_id}&select=slug`, fetchOptions);
    const collectionData = await collectionResponse.json();
    
    if (collectionData && collectionData.length > 0) {
        project.collectionSlug = collectionData[0].slug;
    }

    // Map the database names to our JavaScript names, just like before.
    return {
        ...project,
        mainImageURL: project.main_image_url,
        galleryImages: project.gallery_images,
    };
}


// ----------------------------------------------------------------------
// 3. PAGE LOGIC (Functions to build the HTML)
// ----------------------------------------------------------------------

/**
 * Loads and displays the projects for a single collection.
 * This runs on 'collection.html'.
 */
async function loadCollectionPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const collectionSlug = urlParams.get('slug')?.toLowerCase();

    const titleElement = document.querySelector('.collection-page-title');
    
    // If there's no slug in the URL, we can't load anything.
    if (!collectionSlug) {
        if(titleElement) titleElement.textContent = 'Error: No Collection Selected';
        return;
    }

    if(titleElement) titleElement.textContent = 'Loading...';

    try {
        const collectionData = await fetchCollectionDetails(collectionSlug);

        if (!collectionData || collectionData.projects.length === 0) {
             if(titleElement) titleElement.textContent = `Collection Not Found or It's Empty`;
             return; 
        }

        // Set the main page title.
        if(titleElement) titleElement.textContent = collectionData.title;

        // Get the HTML template and the container where we'll add the project cards.
        const template = document.getElementById('project-card-template');
        const container = document.getElementById('project-list-container');
        if (!container || !template) {
            console.error("Missing container or template for collection page.");
            return;
        }
        container.innerHTML = ''; // Clear the "Fetching projects..." message

        // Loop through each project and create an HTML card for it.
        collectionData.projects.forEach(project => {
            const card = template.content.cloneNode(true).querySelector('.project-card');
            
            card.querySelector('.project-link').href = `project.html?slug=${project.slug}`;
            card.querySelector('img').src = project.mainImageURL;
            card.querySelector('img').alt = project.title;
            card.querySelector('.project-title').textContent = project.title;
            card.querySelector('.project-date').textContent = new Date(project.dateCompleted).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Supabase fetch failed:", error);
        if(titleElement) titleElement.textContent = `CONNECTION ERROR: ${error.message}`;
    }
}


/**
 * Loads and displays the collection boxes on the homepage.
 * This runs on 'index.html'.
 */
async function loadIndexPage() {
    try {
        const collections = await fetchAllCollections();
        
        const template = document.getElementById('collection-box-template');
        const container = document.getElementById('collection-list-container');
        
        if (!container || !template) return; 
        
        container.innerHTML = ''; // Clear the "Loading Collections..." message

        // Loop through each collection and create a big clickable box for it.
        collections.forEach(collection => {
             const box = template.content.cloneNode(true).querySelector('.collection-box');
             
             box.href = collection.url;
             box.querySelector('.collection-title').textContent = collection.title;
             
             container.appendChild(box);
        });

    } catch (error) {
        console.error("Failed to load collections for index:", error);
        const container = document.getElementById('collection-list-container');
        if(container) {
            container.innerHTML = `<h2>Error loading collections.</h2><p>Please check the console for details.</p>`;
        }
    }
}


/**
 * Loads and displays the details for a single project.
 * This runs on 'project.html'.
 */
async function loadProjectPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectSlug = urlParams.get('slug')?.toLowerCase();

    const titleElement = document.querySelector('#project-title');
    const mainImageElement = document.querySelector('#main-image');
    
    if (!projectSlug || !titleElement) {
        if(titleElement) titleElement.textContent = 'Error: No Project Selected';
        return;
    }
    
    titleElement.textContent = 'Loading Project...';

    try {
        const project = await fetchProjectDetails(projectSlug);
        
        if (!project) {
            titleElement.textContent = `Project not found.`;
            return;
        }

        // Fill in the main details like title, image, and description.
        titleElement.textContent = project.title;
        document.querySelector('#project-description').textContent = project.description || 'No description provided.';
        
        if (mainImageElement) {
             mainImageElement.src = project.mainImageURL || ''; 
             mainImageElement.alt = project.title;
        }
        
        // Update the "Back" button to link to the correct collection page.
        const backLinkElement = document.querySelector('#back-link');
        if (project.collectionSlug && backLinkElement) {
            backLinkElement.href = `collection.html?slug=${project.collectionSlug}`;
        }
        
        // Get the gallery container and template.
        const galleryContainer = document.getElementById('gallery-container');
        const galleryTemplate = document.getElementById('gallery-image-template');
        
        if (galleryContainer && galleryTemplate) {
            galleryContainer.innerHTML = ''; // Clear the placeholder

            // The 'gallery_images' column is a JSON array of URLs in Supabase.
            const galleryImages = project.galleryImages || []; 

            if (galleryImages.length > 0) {
                // Create an image element for each URL in the array.
                galleryImages.forEach(imageUrl => {
                    const imgElement = galleryTemplate.content.cloneNode(true).querySelector('img');
                    imgElement.src = imageUrl;
                    imgElement.alt = `Gallery image for ${project.title}`;
                    galleryContainer.appendChild(imgElement);
                });
            } else {
                galleryContainer.innerHTML = '<p>No gallery images available.</p>';
            }
        }
        
    } catch (error) {
        console.error("Failed to load project details:", error);
        titleElement.textContent = `CONNECTION ERROR loading project: ${error.message}`;
    }
}


// ----------------------------------------------------------------------
// 4. CORE APPLICATION ROUTER
// ----------------------------------------------------------------------

/**
 * This function checks which page we're on and calls the correct
 * 'load' function for that page.
 */
async function initApp() {
    const path = window.location.pathname;
    
    if (path.endsWith('/') || path.endsWith('index.html')) {
        await loadIndexPage(); 
    } else if (path.endsWith('collection.html')) {
        await loadCollectionPage(); 
    } else if (path.endsWith('project.html')) {
        await loadProjectPage(); 
    }
}

// Wait until the HTML is fully loaded, then kick off the app.
document.addEventListener('DOMContentLoaded', initApp);
