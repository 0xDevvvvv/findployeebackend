
require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getSkillsPrompt(prompt) {
    skills = "artificial intelligence,data,development tools,end user applications,infrastructure and cloud,media,operating systems,programming languages,science and medicine,security,social and communication,web"
    const finalprompt = "Given these skills"
    + skills
    + "Give only the 3 relevant and necessary skills from this list for the task given." 
    + prompt
    +"No other output is required, no other formatting is required, give the result back as comma seperated values.";
    const data = await model.generateContent(finalprompt);
    return data.response.text();
}
async function getEmployeePrompt(employee,skills) {
    console.log(employee,skills)
    const finalprompt = "Given the following employee details, the empid and selectedskills, "
    +employee
    +"return the empid of the employees who closely matches the following skills"
    +skills
    +"No other output is required , no other formatting is required , only the empid as comma seperated values"
    const data = await model.generateContent(finalprompt);
    return data.response.text();
}
module.exports = {getSkillsPrompt,getEmployeePrompt};