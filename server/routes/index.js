const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");
const { handleUpload } = require("../controllers/controller");

router.post("/transcribe", upload.single("audio"), handleUpload);

module.exports = router;
