'use client';

import { useChat } from 'ai/react';
import { Pros, Topic } from '@/Atoms/ColorAtom';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Page() {

  const [topicState, settopicState] = useRecoilState(Topic);
  const [prosState, setProsState] = useRecoilState(Pros);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    body: {
      topicState,
      prosState
		},
  });
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  //페이지 랜더링 되면 loaded값을 true로 변경 
  useEffect(() => {
    if (topicState === '') {
      router.push('');
    }
    setLoaded(true);
  }, []);

  return (
    <div className=' m-2'>
{loaded && <h1 className=' inline-block border-2 border-gray-500 my-2 p-2 rounded-lg lg:text-2xl font-bold text-gray-900 text-sm '>{topicState}</h1>}
<div className=' h-[60vh] overflow-y-auto border-2 border-gray-500 lg:text-base text-sm w-full lg:w-[95vw] rounded-lg p-2'>
      {messages.map((message, index) => (
        <div
        key={message.id}
        className={`flex ${
          message.role === 'user' ? 'justify-end' : 'justify-start'
        }`}
      >
        <div
          className={`border-2 border-black rounded-lg ${
            message.role === 'user' ? 'bg-gray-300' : 'bg-white'
          } p-2 my-2 max-w-[40vw]`}
        >
          {message.role === 'user' ? `나: ` : 'Debatato: '}
          {message.content}
        </div>
      </div>
      
      ))}
    </div>

    <div className=' mt-2'>
      <form onSubmit={handleSubmit}>
      <textarea
      id="OrderNotes"
      className=" pl-2 pt-2 w-full lg:w-[95vw] resize-none border-2 border-gray-500 px-0 align-top lg:text-lg sm:text-sm rounded-lg"
      rows={4}
      placeholder="debatato에게 반박해보세요!"
      name="prompt" 
      value={input} 
      onChange={handleInputChange}
    ></textarea>
    <br/>
      <button type="submit" className=' mt-2 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300'>이의있소</button>
      </form>
    </div>

    </div>
  );
}