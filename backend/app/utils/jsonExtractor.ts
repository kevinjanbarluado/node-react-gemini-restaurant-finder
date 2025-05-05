export function extractJsonFromResponse(text) {
    if (!text) return null;

    const match = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (!match || !match[1]) return null;

    try {
        return JSON.parse(match[1]);
    } catch {
        return null;
    }
}
