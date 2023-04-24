import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rootRouter from './routes/rootRouter.js';
import clientRouter from './routes/clientRouter.js';




const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Routers
app.use('/', rootRouter);
app.use('/client', clientRouter);

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
