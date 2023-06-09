import React, { useState } from 'react';
import axios from 'axios';

const OpenAITest = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const testOpenAI = async () => {
    console.log("Starting testOpenAI");
    setLoading(true);
    let prompt = 'respond one sentence about bears';
    try {
      const result = await axios.post('/api/openai/', { prompt });
      const data = result.data;
      console.log('OpenAI API response:', data);

      setResponse(data);
  
    } catch (error) {
      console.error('Error connecting to OpenAI API:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Loading state:", loading);
  console.log("Response state:", response);

  return (
    <div>
      <h2>OpenAI API Test</h2>
      <button onClick={testOpenAI}>Test OpenAI API</button>
      {loading ? (
        <p>We are Loading...</p>
      ) : response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>No response yet</p>
      )}
    </div>
  );
};

export default OpenAITest;
