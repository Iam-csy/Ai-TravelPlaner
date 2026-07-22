import { ChatPromptTemplate } from "@langchain/core/prompts";

const UserPrompt = ChatPromptTemplate.fromTemplate(`
You are an AI Travel Planner.

Use the weather information provided.

Weather:
{weather}

User Question:
{question}

Give a helpful travel recommendation.
`);

export default UserPrompt;