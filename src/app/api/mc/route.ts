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
      model: groq('llama-3.1-8b-instant'),
      system: 'Suggest emoji based on my sentences. Be witty and cutie and different! only use emoji',  // 한국어로만 응답하도록 지시
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
