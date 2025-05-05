import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { AI_MODEL } from './consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || '' });

export const fetchAIResponse = async (prompt: string): Promise<any> => {
    try {
        return await ai.models.generateContent({
            model: AI_MODEL,
            contents: prompt,
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal server error');
    }
};
