import { json } from '@sveltejs/kit';
import { VITE_GDRIVE_KEY, VITE_FOLDER_ID } from '$env/static/private';

export async function GET() {
    const r = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${VITE_FOLDER_ID}'+in+parents&fields=files(id,name,mimeType)&key=${VITE_GDRIVE_KEY}`
    );

    const data = await r.json();
    console.log(data);
    return json(data.files);
}