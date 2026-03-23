const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
require("dotenv").config();

async function transcribeAudio(filePath) {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/openai/whisper-small",
      form,
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          ...form.getHeaders(),
        },
        maxBodyLength: Infinity,
      }
    );

    return response.data.text || "No transcription returned";
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}
module.exports = { transcribeAudio };