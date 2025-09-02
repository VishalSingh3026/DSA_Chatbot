# DSA Chatbot 🧠

An AI-powered Data Structures and Algorithms chatbot built with Gemini API and deployed on Vercel.

## Features

- 🤖 **AI-Powered**: Uses Google's Gemini AI for intelligent responses
- 📚 **DSA Expert**: Specialized in Data Structures and Algorithms
- 🎭 **Personality**: Responds rudely to non-DSA questions with Haryanvi expressions
- 💻 **Modern UI**: Beautiful, responsive web interface
- 🚀 **Serverless**: Fast deployment on Vercel
- 📱 **Mobile-Friendly**: Works on all devices

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VishalSingh3026/DSA_Chatbot)

1. Click the deploy button above
2. Add your `GEMINI_API_KEY` in environment variables
3. Deploy!

## Environment Variables

Add this to your Vercel environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## Getting Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and add it to Vercel environment variables

## Local Development

```bash
# Clone the repository
git clone https://github.com/VishalSingh3026/DSA_Chatbot.git
cd DSA_Chatbot

# Install dependencies
npm install

# Set up environment variables
echo "GEMINI_API_KEY=your_api_key_here" > .env

# Run locally
npm run dev
```

## API Endpoints

- `POST /api/chat` - Send message to DSA chatbot
- `GET /api/health` - Health check

## Technologies Used

- **AI**: Google Gemini API
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel

## License

ISC License
