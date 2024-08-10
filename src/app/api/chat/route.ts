import { convertToCoreMessages, streamText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';
import { useRecoilState } from 'recoil';
import { Pros, Topic } from '@/Atoms/ColorAtom';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages,topicState,prosState } = await req.json();

    const result = await streamText({
      model: groq('llama3-8b-8192'),
      system: `As an AI debater, you are required to support a position opposite to the user's on a given topic. 
Topic: ${topicState}
User's position: ${prosState ? 'pro' : 'con'}
You must provide logical arguments against the user's position and engage in a logical and polite discussion to convince the user so simply and clearly and shortly. 
All conversations must!!!!!!!!!!!!!!!!!!!!!!! be in Korean.
DO NOT USE ENGLISH ONLY KOREAN.`,  // 한국어로만 응답하도록 지시
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
