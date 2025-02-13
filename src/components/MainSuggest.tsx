'use client';
import { useChat } from 'ai/react';
import { useEffect, useState,  } from 'react';
import { Topic, Pros } from '@/Atoms/ColorAtom';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { Button, TextInput } from '@mantine/core';
import {HeroBullets} from '@/components/heroheader';

export default function Home() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/suggest',
      });
      const [topicState, settopicState] = useRecoilState(Topic);
      const [, setProsState] = useRecoilState(Pros);

      const router = useRouter();

      // 메시지 배열이 변경될 때마다 최신 메시지 업데이트
      useEffect(() => {
        if (messages.length > 0) {
            settopicState(messages[messages.length - 1].content);
        }
      }, [messages]);

      const handleClick = (pro:boolean) => {
        setProsState(pro);
        if (topicState !== '') {
            router.push('chat');
        }
      };
      const [loaded, setLoaded] = useState(false);
    
      //페이지 랜더링 되면 loaded값을 true로 변경 
      useEffect(() => {
        setLoaded(true);
      }, []);

    return (
        <div className='grid place-items-center '>
            <HeroBullets/>

            <div className='flex'>
            <div className=' rounded-lg font-semibold text-xs overflow-y-auto lg:text-2xl grid place-items-center h-[20vh] text-center border-2 border-black w-full mx-2 lg:w-[50vw] '>
                    {topicState}
            </div>
            </div>
            
             <div className=' mt-4 grid-cols-3 grid place-items-center w-[100vw] lg:w-[50vw]'>
             {/* <button onClick={()=>handleClick(true)} className={`transition-colors duration-150 w-5/6 lg:w-[10vw] h-1/2 mt-1 font-medium rounded-lg me-2 text-white 
                ${topicState !== '' ? 'bg-blue-600 hover:bg-blue-900' : 'bg-blue-900 pointer-events-none'} 
                focus:ring-gray-300
                inline-block rounded border border-current px-8 py-3 lg:text-xl text-xs font-medium transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-black-500`}>
                찬성 / 예
                </button> */}
                <Button onClick={()=>handleClick(true)} size="xl" disabled={ topicState !== '' ? false : true} variant="filled">찬성 / 예</Button>             
                <form onSubmit={handleSubmit} >
                
                <TextInput
                value={input}
                size="xl"
                placeholder="주제를 입력하세요"
                onChange={handleInputChange}
              />
                <div className='grid place-items-center'>
                    <button type="submit" className=' rounded-md mt-4 group relative inline-block overflow-hidden border border-black px-8 py-3 focus:outline-none focus:ring'>

                    <span
              className="absolute inset-x-0 top-0 h-[2px] bg-black transition-all group-hover:h-full group-active:bg-black"
            ></span>

            <span
              className=" relative lg:text-xl text-xs font-medium text-black transition-colors group-hover:text-white"
            >
            주제 선정!
          </span>

                    </button>
                </div>
                </form>
                <Button onClick={()=>handleClick(false)} size="xl" color="red" disabled={ topicState !== '' ? false : true} variant="filled">반대 / 아니오</Button>             

                </div>       
        </div>
    );
}
