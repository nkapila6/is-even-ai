// index.js
const isOdd = require("is-odd-ai");
require("dotenv").config();

// Function to check if a number is even using OpenAI ChatGPT
async function isEven(number) {
  try {
    return !(await isOdd(number));
  } catch (error) {
    console.error("Error querying OpenAI:", error);
    throw error;
  }
}

module.exports = isEven;
