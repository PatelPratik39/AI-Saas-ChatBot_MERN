// import   Configuration   from "openai";

// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: process.env.OPEN_AI_SECRET,
//     organization: process.env.OPENAI_ORAGANIZATION_ID,
//   });
//   return config;
// };


import  Configuration  from 'openai';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

export const configureOpenAI = () => {
  return new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_ID, // This is optional
  });
};
