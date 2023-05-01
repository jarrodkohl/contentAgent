import express from 'express';
import clientRouter from './clientRouter.js';


const rootRouter = express.Router();

rootRouter.use('/', clientRouter);




export default rootRouter;

