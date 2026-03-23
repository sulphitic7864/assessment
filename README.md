🎙️ Audio Transcription App

A full-stack audio transcription application built with React, Tailwind CSS, Node.js, and Hugging Face Whisper API.
Upload audio files (MP3/WAV) and get real-time transcription right in your browser.

🌟 Features
Drag & drop audio file upload (supports MP3/WAV)
Audio waveform preview using WaveSurfer.js
Instant transcription using Hugging Face Whisper API
File size validation (max 25 MB)
Modal to display raw and cleaned transcription
Responsive UI with Tailwind CSS
🛠️ Tech Stack
Layer	Technology
Frontend	React, Tailwind CSS, react-dropzone, react-hot-toast, WaveSurfer.js
Backend	Node.js, Express, Axios, FormData
API	Hugging Face Whisper (openai/whisper-small)
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/sulphitic7864/assessment.git
cd assessment
2️⃣ Setup Backend
cd server
npm install

Create a .env file in /server:

HF_API_KEY=your_huggingface_api_key_here
PORT=5000

Start the server:

npm run dev
# or
node server.js

Server runs on: http://localhost:5000

3️⃣ Setup Frontend
cd ../client
npm install
npm start

Frontend runs on: http://localhost:3000

4️⃣ Usage
Open the app in your browser.
Drag & drop an audio file (max 25 MB).
Click Upload & Transcribe.
View transcription in the modal.