import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import { extractJsonFromResponse } from './utils/jsonExtractor.js';
import { fetchAIResponse } from './utils/ai.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Health Check
app.get('/api', (_, res: Response) => {
    res.json({ message: 'Hello from backend!' });
});

// prompt to JSON
const executeHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ error: 'Message is required' });
        return;
    }

    const prompt = `Based on the following message: "${message}", extract the food name as "query" and the location as "near". Return only a JSON object with a top-level key "parameters". The JSON must be strictly formatted and required the keys "query" and "near", optional keys are near, rating, open_now, and price. Do not include any extra text.`;

    try {
        const response = await fetchAIResponse(prompt);

        const parameters = extractJsonFromResponse(response?.text)?.parameters;

        if (!parameters) {
            res.status(500).json({ error: 'Could not extract JSON from response' });
            return;
        }

        res.json({ action: "restaurant_search", parameters });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// FourSquare-like Restaurant Finder
const foursquareHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { query, near } = req.query;

    if (!query || !near) {
        res.status(400).json({ error: 'Query and near parameters are required' });
        return;
    }

    const prompt = `find a ${query} restaurant near ${near}, return parameters: address, cuisine, rating, contact, hours, in json format with the main head as "results" and max value of 5`;

    try {
        const response = await fetchAIResponse(prompt);

        const results = extractJsonFromResponse(response?.text);

        if (!results?.results) {
            res.status(500).json({ error: 'Could not extract JSON from response' });
            return;
        }

        res.json({ ...results });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Define routes
app.post('/api/execute', executeHandler);
app.get('/api/foursquare', foursquareHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
