import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendKalisMessage = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    return response.text || "Je n'ai pas pu générer de réponse. Veuillez réessayer.";
  } catch (error) {
    console.error("Erreur lors de la communication avec Gemini:", error);
    return "Une erreur technique est survenue. Veuillez nous contacter directement.";
  }
};