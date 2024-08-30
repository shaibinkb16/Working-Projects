import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const router = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/images/generations';

// Apply CORS middleware
router.use(cors());

router.route('/dalle').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      OPENAI_API_URL,
      {
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "base64",
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const image = response.data.data[0].url; // Access image URL (might change based on version)
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

router.route('/post').post((req, res) => {
  // Handle post request logic here, such as saving the form data
  const { name, prompt, photo } = req.body;
  // Example logic:
  // Save the data, then respond with a success message
  res.status(200).json({ message: 'Post saved successfully' });
});

export default router;
