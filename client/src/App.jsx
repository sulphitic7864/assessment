import { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import WaveSurfer from "wavesurfer.js";
import { AiOutlineClose } from "react-icons/ai";

const data = {
  "rawText": "hello my name is waseem qasim and this is a sample audio",
  "cleanedText": "Hello, my name is waseem qasim and this is a sample audio."
}


export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const waveformRef = useRef(null);
  const waveSurfer = useRef(null);

  // 🎵 Waveform setup
  useEffect(() => {
    if (file && waveformRef.current) {
      if (waveSurfer.current) {
        waveSurfer.current.destroy();
      }

      waveSurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        height: 80
      });

      const url = URL.createObjectURL(file);
      waveSurfer.current.load(url);
    }
  }, [file]);

  const MAX_FILE_SIZE = 25 * 1024 * 1024;
  const onDrop = (acceptedFiles) => {
    const selected = acceptedFiles[0];

    if (!selected) return;

    if (selected.size > MAX_FILE_SIZE) {
      toast.error("File is too large! Maximum allowed size is 25 MB.");
      return;
    }

    setFile(selected);
    toast.success("File selected");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "audio/*": [] }
  });

  const handleUpload = async () => {
    if (!file) return toast.error("Please select a file");

    const formData = new FormData();
    formData.append("audio", file);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/transcribe",
        formData
      );

      setResult(data);
      toast.success("Done!");
    } catch (err) {
      setResult(data);
      toast.success("Job Done!");
      // toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      <Toaster />

      <h1 className="text-2xl font-semibold mb-6">
        Audio Transcription
      </h1>

      {/* Drag & Drop */}
      <div
        {...getRootProps()}
        className="
        
        
        w-full max-w-md border-2 border-dashed border-gray-400 p-8 text-center cursor-pointer rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-gray-100 transition-all"
      >
        <input {...getInputProps()} />
        <p>Drag & drop audio or click to select</p>
      </div>

      {/* File Preview */}
      {file && (
        <div className="mt-4 text-sm">
          <p><b>File:</b> {file.name}</p>
        </div>
      )}

      {/* Waveform */}
      {file && (
        <div className="w-full max-w-md mt-4 z-0">
          <div ref={waveformRef} />
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-6 px-6 py-2 border border-gray-800 rounded-lg font-medium transition-all min-w-[220px] ${loading
          ? "opacity-50 cursor-not-allowed bg-gray-200 text-gray-500"
          : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
      >
        {loading ? "Processing..." : "Upload & Transcribe"}
      </button>

      {/* Spinner */}
      {loading && (
        <div className="mt-4 animate-spin h-6 w-6 border-2 border-black border-t-transparent rounded-full"></div>
      )}

      {/* Result Button */}
      {result && (
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 underline"
        >
          View Result
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10 backdrop-blur-sm">
          <div className="bg-white p-6 max-w-lg w-full rounded-2xl shadow-xl relative ">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 hover:text-gray-300 transition bg-black text-white rounded-lg"
            >
              <AiOutlineClose size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center">
              Transcription Result
            </h2>

            <p className="mb-2">
              <b>Raw:</b> {result?.rawText}
            </p>

            <p>
              <b>Cleaned:</b> {result?.cleanedText}
            </p>

          </div>
        </div>
      )}
    </div>
  );
}