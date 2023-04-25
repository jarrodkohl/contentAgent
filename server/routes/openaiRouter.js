import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

const openaiRouter = express.Router();

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

openaiRouter.post('/', async (req, res) => {
  console.log('Received POST request:', req.body);
  try {
    const prompt = req.body.prompt;
    console.log('Received prompt:', prompt);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const responseData = completion.data.choices[0].message.content;
    console.log('Backend OpenAI API response:', responseData);

    res.status(200).json({ response: responseData });
  } catch (error) {
    console.error('Error connecting to OpenAI API:', error);
    res.status(500).json({ error: 'Error connecting to OpenAI API' });
  }
});

export default openaiRouter;
