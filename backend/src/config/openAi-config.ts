// import   Configuration   from "openai";

// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: process.env.OPEN_AI_SECRET,
//     organization: process.env.OPENAI_ORAGANIZATION_ID,
//   });
//   return config;
// };


// import  Configuration  from 'openai';
// // import OpenAIApi from 'openai';
// // import { config } from 'dotenv';

// // config(); // Load environment variables from .env file

// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: process.env.OPEN_AI_SECRET,
//     organization: process.env.OPENAI_ORAGANIZATION_ID,
//   });
//   return config;

// };



import { config } from 'dotenv';

config(); // Load environment variables from .env file

const loadOpenAIApi = async () => {
  const openaiModule = await import('openai');
  console.log(openaiModule); // Log to see available exports

  const { Configuration, OpenAIApi } = openaiModule;

  const openaiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_ID, // This is optional
  });

  return new OpenAIApi(openaiConfiguration);
};

export default loadOpenAIApi;

