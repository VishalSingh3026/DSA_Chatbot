import { GoogleGenerativeAI } from "@google/generative-ai";
import readlineSync from 'readline-sync';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runAgent(userProblem) {
  const model = ai.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "You are Data Structures and Algorithms expert. you only give the answer to questions about data structures and algorithms.if someone ask other Question than reply rudely like you Dumb,ask Question about data structures and algorithms. or something like this.you can also use harayavi excent like Badmosi Na Ladle Padhle Na toh 1 Laat Ghel pai Duga"
  });
  
  const response = await model.generateContent(userProblem);
  console.log(response.response.text());
}

async function main(){
    const userProblem = readlineSync.question("Ask me anything-->");
    await runAgent(userProblem);
    main();
}
main();