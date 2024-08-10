import { useState } from 'react';
import { createOpenAI as createGroq } from '@ai-sdk/openai';
import MainSuggeset from '../components/MainSuggest';

export default function Home() {

    return (
        <div className='grid place-items-center'>
            <h1>Debatato</h1>
            <p>Welcome to the home page!</p>
            <MainSuggeset/>
        </div>
    );
}
