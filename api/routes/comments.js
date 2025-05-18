import express from 'express';
import { getComments } from '../controllers/comment.js'; // Step 2

const router = express.Router();

// Define GET route to fetch comments
router.get("/", getComments); // Step 3

export default router;
