// netlify/functions/pexels.js
import fetch from 'node-fetch';

export async function handler(event, context) {
    const query = event.queryStringParameters.query;

    const API_KEY = "Yi8sO4huYGVblkZJlzVO0oTxYgh5DjdizAHD3X9wopG7BV4hhh6TETD2";
    const url = `https://api.pexels.com/v1/search?query=${query}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("Error fetching Pexels data:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch images" }),
        };
    }
}
