const { transcribeAudio } = require("../services/transcriptionService");
const { cleanText } = require("../utils/textProcessing");

exports.handleUpload = async (req, res) => {
  try {
    const rawText = await transcribeAudio(req.file.path);
    const cleanedText = cleanText(rawText);

    res.json({ rawText, cleanedText });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
