import { useState } from 'react';
import { createOpenAI as createGroq } from '@ai-sdk/openai';
import MainSuggeset from '../components/MainSuggest';

export default function Home() {

    return (
        <div className=' grid place-items-center'>
            <h1 className=' text-xl lg:text-3xl mt-10 my-2'>Debatato!</h1>
            <MainSuggeset/>
        </div>
    );
}
