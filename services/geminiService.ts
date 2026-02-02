
import { GoogleGenAI } from "@google/genai";
import { CLUB_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function chatWithConcierge(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const model = "gemini-3-flash-preview";
  
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
}
