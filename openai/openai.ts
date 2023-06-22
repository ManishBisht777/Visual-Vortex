import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: process.env.OPEN_AI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default openai
