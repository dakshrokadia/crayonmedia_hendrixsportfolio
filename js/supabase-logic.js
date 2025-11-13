// /js/supabase-logic.js

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. SUPABASE CLIENT SETUP
    // ----------------------------------------------------------------------
    const SUPABASE_URL = 'https://kvwrurvdqjywlfamgppz.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2d3J1cnZkcWp5d2xmYW1ncHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDAzMDQsImV4cCI6MjA3NjQ3NjMwNH0.BCMW-5Tf81ERShDSWGGBdsz56K11COtKHocyfV7qaxY';
    const SUPABASE_API_BASE = `${SUPABASE_URL}/rest/v1/`;

    const fetchOptions = {
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
     * Fetches all collections for the homepage grid.
     */
    async function fetchAllCollections() {
        const url = `${SUPABASE_API_BASE}collection?select=title,slug,home_page_image`;
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error(`Failed to fetch collections: ${response.statusText}`);
        }
        return await response.json();
    }

    /**
     * Fetches details for a single collection and its associated projects.
     * @param {string} slug The collection slug from the URL.
     */
    async function fetchCollectionDetails(slug) {
        // Fetch collection details (including the hero image)
        const collectionUrl = `${SUPABASE_API_BASE}collection?slug=eq.${encodeURIComponent(slug)}&select=id,title,collection_page_image`;
        const collectionResponse = await fetch(collectionUrl, fetchOptions);
        if (!collectionResponse.ok) {
            throw new Error('Collection not found.');
        }
        const collectionData = await collectionResponse.json();
        if (!collectionData || collectionData.length === 0) {
            return null;
        }
        const collection = collectionData[0];

        // Fetch projects belonging to this collection
        const projectsUrl = `${SUPABASE_API_BASE}project?collection_id=eq.${collection.id}&order=date_completed.desc&select=title,slug,date_completed,main_image_url`;
        const projectsResponse = await fetch(projectsUrl, fetchOptions);
        if (!projectsResponse.ok) {
            throw new Error('Failed to fetch projects.');
        }
        const projects = await projectsResponse.json();

        return { ...collection, projects };
    }

    /**
     * Fetches details for a single project.
     * @param {string} slug The project slug from the URL.
     */
    async function fetchProjectDetails(slug) {
        const url = `${SUPABASE_API_BASE}project?slug=eq.${encodeURIComponent(slug)}&select=title,date_completed,main_image_url,landscape_gallery_raw,portrait_gallery_raw`;
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error('Project not found.');
        }
        const data = await response.json();
        if (!data || data.length === 0) {
            return null;
        }
        const project = data[0];

        // --- Gallery Logic ---
        const parseRawLinks = (rawText) => rawText ? rawText.split(/[\n,]/).map(link => link.trim()).filter(Boolean) : [];
        const landscapeUrls = parseRawLinks(project.landscape_gallery_raw);
        const portraitUrls = parseRawLinks(project.portrait_gallery_raw);
        
        const galleryItems = [];
        let landscapeIndex = 0;
        let portraitIndex = 0;

        // If only one type of image exists, just add them all.
        if (landscapeUrls.length === 0 && portraitUrls.length > 0) {
            portraitUrls.forEach(url => galleryItems.push({ url, type: 'portrait' }));
        } else if (portraitUrls.length === 0 && landscapeUrls.length > 0) {
            landscapeUrls.forEach(url => galleryItems.push({ url, type: 'landscape' }));
        } else {
             // Main loop: 1 landscape, 4 portraits
            while (landscapeIndex < landscapeUrls.length && portraitIndex < portraitUrls.length) {
                // Add one landscape
                galleryItems.push({ url: landscapeUrls[landscapeIndex++], type: 'landscape' });
                // Add up to four portraits
                const portraitsToAdd = portraitUrls.slice(portraitIndex, portraitIndex + 4);
                portraitsToAdd.forEach(url => galleryItems.push({ url, type: 'portrait' }));
                portraitIndex += 4;
            }
        }
        
        // Add any leftovers
        while (landscapeIndex < landscapeUrls.length) {
            galleryItems.push({ url: landscapeUrls[landscapeIndex++], type: 'landscape' });
        }
        while (portraitIndex < portraitUrls.length) {
            galleryItems.push({ url: portraitUrls[portraitIndex++], type: 'portrait' });
        }
        
        project.galleryItems = galleryItems;
        return project;
    }


    // ----------------------------------------------------------------------
    // 3. PAGE LOGIC
    // ----------------------------------------------------------------------

    /**
     * Loads collections on the homepage (index.html).
     */
    async function loadIndexPage() {
        const container = document.getElementById('collection-list-container');
        const template = document.getElementById('collection-item-template');
        if (!container || !template) return;

        try {
            const collections = await fetchAllCollections();
            container.innerHTML = ''; // Clear skeleton loaders

            collections.forEach(collection => {
                const clone = template.content.cloneNode(true);
                const link = clone.querySelector('a');
                
                link.href = `collection.html?slug=${collection.slug}`;
                link.querySelector('.collection-image').src = collection.home_page_image || '';
                link.querySelector('.collection-heading').textContent = collection.title.toUpperCase() + ' COLLECTION';
                
                container.appendChild(clone);
            });
        } catch (error) {
            container.innerHTML = '<p>Error loading collections. Please try again later.</p>';
            console.error(error);
        }
    }

    /**
     * Loads a single collection's projects (collection.html).
     */
    async function loadCollectionPage() {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');

        const heroContainer = document.querySelector('.collections-hero-image-container');
        const titleElement = document.querySelector('.collection-hero-heading');
        const projectContainer = document.getElementById('project-list-container');
        const projectTemplate = document.getElementById('project-card-template');

        if (!slug || !titleElement || !projectContainer || !projectTemplate) return;

        try {
            const data = await fetchCollectionDetails(slug);
            if (!data) {
                titleElement.textContent = 'Collection Not Found';
                return;
            }

            titleElement.textContent = data.title;
            if (data.collection_page_image) {
                heroContainer.style.backgroundImage = `url('${data.collection_page_image}')`;
            }

            projectContainer.innerHTML = ''; // Clear skeleton projects

            data.projects.forEach(project => {
                const clone = projectTemplate.content.cloneNode(true);
                const link = clone.querySelector('.projects-item');
                
                link.href = `project.html?slug=${project.slug}`;
                link.querySelector('.projects-item-image').src = project.main_image_url || '';
                link.querySelector('.projects-item-name').textContent = project.title;
                link.querySelector('.projects-item-date').textContent = new Date(project.date_completed).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                
                projectContainer.appendChild(clone);
            });
        } catch (error) {
            titleElement.textContent = 'Connection Error';
            console.error(error);
        }
    }

    /**
     * Loads a single project's details and gallery (project.html).
     */
    async function loadProjectPage() {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');

        const heroBackground = document.querySelector('.hero-background');
        const titleElement = document.querySelector('.projects-hero-heading');
        const dateElement = document.querySelector('.projects-hero-date');
        const galleryContainer = document.getElementById('gallery-container');
        const galleryTemplate = document.getElementById('gallery-item-template');

        if (!slug || !titleElement) return;

        try {
            const project = await fetchProjectDetails(slug);
            if (!project) {
                titleElement.textContent = 'Project Not Found';
                return;
            }

            heroBackground.style.backgroundImage = `url('${project.main_image_url}')`;
            titleElement.textContent = project.title;
            titleElement.classList.remove('is-skeleton');
            dateElement.textContent = new Date(project.date_completed).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            dateElement.classList.remove('is-skeleton');

            galleryContainer.innerHTML = ''; // Clear skeleton gallery

            project.galleryItems.forEach(item => {
                const clone = galleryTemplate.content.cloneNode(true);
                const img = clone.querySelector('.gallery-image');
                img.src = item.url;
                img.alt = `${project.title} gallery image`;

                if (item.type === 'landscape') {
                    clone.firstElementChild.classList.add('is-landscape');
                }

                galleryContainer.appendChild(clone);
            });

        } catch (error) {
            titleElement.textContent = 'Connection Error';
            titleElement.classList.remove('is-skeleton');
            dateElement.classList.remove('is-skeleton');
            console.error(error);
        }
    }


    // ----------------------------------------------------------------------
    // 4. ROUTER
    // ----------------------------------------------------------------------

    /**
     * Checks the current page path and calls the appropriate load function.
     */
    function initApp() {
        const path = window.location.pathname;
        if (path === '/' || path.endsWith('/index.html')) {
            loadIndexPage();
        } else if (path.endsWith('/collection.html')) {
            loadCollectionPage();
        } else if (path.endsWith('/project.html')) {
            loadProjectPage();
        }
    }

    initApp();
});