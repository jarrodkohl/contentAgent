import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Serve the index.html file for all client routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

// Serve any other static files from the build folder
router.use(express.static(path.join(__dirname, '../../client/build')));
console.log('Serving static files from', path.join(__dirname, '../../client/build'));
export default router;
