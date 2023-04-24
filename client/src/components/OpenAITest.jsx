import React, { useState } from 'react';
import axios from 'axios';

const OpenAITest = () => {
  const [response, setResponse] = useState('');

  const testOpenAI = async () => {
    try {
      const result = await axios.post('/api/openai', { prompt: 'Once upon a time' });
      setResponse(result.data);
    } catch (error) {
      console.error('Error connecting to OpenAI API:', error);
    }
  };

  return (
    <div>
      <h2>OpenAI API Test</h2>
      <button onClick={testOpenAI}>Test OpenAI API</button>
      <pre>{response}</pre>
    </div>
  );
};

export default OpenAITest;
