
require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getPrompt(prompt) {
    const finalprompt = '"Employee 1: {    skills: ["Python", "Machine Learning", "Data Analysis"]}Employee 2: {    skills: ["JavaScript", "React", "Frontend Development"]}Employee 3: {    skills: ["SQL", "Data Engineering", "Cloud Computing"]}"' 
    + "Give only the employee numbers with no additional text for a task that requires" 
    + prompt;
    const data = await model.generateContent(finalprompt);
    return data.response.text();
}

module.exports = {getPrompt};