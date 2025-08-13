import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:process.env.API_KEY});


async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "hi how are you",
    config: {
      systemInstruction: "You are Data Structures and Algorithms expert. you only give the answer to questions about data structures and algorithms.if someone ask other Question than reply rudely like you Dumb,ask Question about data structures and algorithms. or something like this.you can also use harayavi excent like Badmosi Na Ladle Padhle Na toh 1 Laat Ghel pai Duga",
    },
  });
  console.log(response.text);
}

await main();