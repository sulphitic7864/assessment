function cleanText(text) {
  return text
    .toLowerCase()
    .replace(/\b(uh|um|you know)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = { cleanText };
