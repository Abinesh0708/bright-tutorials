import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { WEBSITE_CONTEXT } from "../constants";

// Initialize the client
// Ideally, the API key should be in a .env file, but for this demo environment we access process.env directly.
// Note: In a real client-side app, you should proxy requests to a backend to hide the API key,
// or use Firebase App Check/similar if supported.
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: WEBSITE_CONTEXT,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "AI Chat is unavailable (Missing API Key). Please contact us by phone.";
  }

  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    chatSession = null;
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
};