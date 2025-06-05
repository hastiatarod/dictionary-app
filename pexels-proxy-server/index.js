const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


const app = express();
const port = 5000;

app.use(cors());

app.get("/api/photos", async (req, res) => {
    const query = req.query.query;
    const apiKey = "Yi8sO4huYGVblkZJlzVO0oTxYgh5DjdizAHD3X9wopG7BV4hhh6TETD2";

    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
                Authorization: apiKey,

            }
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching Pexels data:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, () => {
    console.log(`Pexels proxy server running at http://localhost:${port}`);
});
