// api/ping.js

export default async function handler(request, response) {
  try {
    // This URL makes a very lightweight request to your 'collection' table to keep it active.
    const supabaseUrl = 'https://kvwrurvdqjywlfamgppz.supabase.co/rest/v1/collection?limit=1';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2d3J1cnZkcWp5d2xmYW1ncHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDAzMDQsImV4cCI6MjA3NjQ3NjMwNH0.BCMW-5Tf81ERShDSWGGBdsz56K11COtKHocyfV7qaxY';

    await fetch(supabaseUrl, {
      method: 'HEAD', // Use HEAD to be even more lightweight - we only need the status, not the data.
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    
    // Respond to Vercel that the job was successful.
    response.status(200).send('Pinged Supabase successfully.');

  } catch (error) {
    // If something goes wrong, log the error.
    console.error(`Error pinging Supabase: ${error.message}`);
    response.status(500).send(`Error pinging Supabase: ${error.message}`);
  }
}