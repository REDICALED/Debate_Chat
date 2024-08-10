import { convertToCoreMessages, streamText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: groq('llama3-8b-8192'),
      system: 'For the provided keyword, Suggest one simple discussion creative agenda topic that will divide opinion into two camps (pros and cons). that should be a sentence. you must Respond only in Korean. And at the end of it, you must!!!!!!!!! add one emoji that fits the keyword.',
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error processing request:', error); // 에러 로그 추가
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
