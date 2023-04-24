import express from 'express';
// import OpenAiClient from '../api/OpenAiClient.js';
import clientRouter from './clientRouter.js';
import openAITestRouter from './openAITestRouter.js';

const rootRouter = express.Router();

rootRouter.use('/', clientRouter);
// rootRouter.use('/api/v1', openAITestRouter);


export default rootRouter;
