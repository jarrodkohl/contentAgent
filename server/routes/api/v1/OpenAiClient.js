import dotenv from 'dotenv'
import OpenAiConfig from './OpenAiConfig'


import { OpenAIApi } from "openai"


class OpenAiClient {
  static async generatePrompt(promptText) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not found in environment variables')
    }

    const openai = new OpenAIApi(OpenAiConfig.configuration)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: promptText,
      max_tokens: 200,
      temperature: 0.6,
    });

    return response.data.choices[0].text
  }
}

export default OpenAiClient
