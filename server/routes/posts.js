import express from 'express';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { prompt } = req.body;
    const ai = await openai.images.generate({
      prompt,
      n: 1,
      size: "512x512",
      model: "dall-e-3",
      response_format: "b64_json",
    });
    res.status(200).json({ photo: ai.data[0].b64_json });
  } catch (error) {
    console.log(error);
  }
});



export default router;  