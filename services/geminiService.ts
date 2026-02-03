
import { GoogleGenAI } from "@google/genai";
import { CLUB_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

export async function chatWithConcierge(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("MCC: No Gemini API Key found. Chatbot will return mock response.");
    return "I am currently offline because my API key is missing. Please ask the developer to set up the GEMINI_API_KEY in .env.local.";
  }

  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }

  const model = "gemini-2.0-flash";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `You are the Mtunzini Country Club (MCC) Concierge. You are warm, professional, and helpful. Use the following context to answer questions about the club: ${CLUB_CONTEXT}. If you don't know something, suggest the user contacts the manager at manager@mtunzinicc.co.za. Keep responses concise and friendly.`,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or contact the club directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to the clubhouse. Please try again in a moment.";
  }
}
