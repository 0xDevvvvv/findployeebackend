
require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getPrompt(prompt) {
    skills = "artificial intelligence,data,development tools,end user applications,infrastructure and cloud,media,operating systems,programming languages,science and medicine,security,social and communication,web"
    const finalprompt = "Given these skills"
    + skills
    + "Give only the relevant skills from this list for the task given ." 
    + prompt
    +"No other output is required, no other formatting is also required only comma seperated";
    const data = await model.generateContent(finalprompt);
    return data.response.text();
}

module.exports = {getPrompt};