import { Client } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new Client({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  try {
    const response = await openai.createImage({
      prompt: "A photorealistic image of a cat wearing a hat",
      n: 1,
      size: "1024x1024",
      response_format: "base64",
    });

    console.log(response.data); // Or handle the response data as needed
  } catch (error) {
    console.error(error);
    // Handle specific errors based on error.response.data.error.message
  }
}

main();
