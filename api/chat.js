import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// DSA Agent function
async function runAgent(userProblem) {
  try {
    const model = ai.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are Data Structures and Algorithms expert. you only give the answer to questions about data structures and algorithms.if someone ask other Question than reply rudely like you Dumb,ask Question about data structures and algorithms. or something like this.you can also use harayavi excent like Badmosi Na Ladle Padhle Na toh 1 Laat Ghel pai Duga"
    });
    
    const response = await model.generateContent(userProblem);
    return response.response.text();
  } catch (error) {
    console.error('Error in runAgent:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }

    const response = await runAgent(message);
    res.status(200).json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to process your question. Please try again.' });
  }
}
