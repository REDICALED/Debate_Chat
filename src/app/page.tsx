import { generateText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

const { text } = await generateText({
  model: groq('llama-3.1-405b-reasoning'),
  prompt: 'What is love?',
});

export default function Home() {

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
}
6