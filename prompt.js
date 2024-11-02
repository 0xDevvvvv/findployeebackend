
require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getPrompt(prompt) {
    const data = await model.generateContent(prompt);
    return data.response.text();
}

module.exports = {getPrompt};