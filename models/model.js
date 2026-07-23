import { ChatOllama } from "@langchain/ollama";




   export const llm = new ChatOllama({
        model: process.env.modelName,
        temperature: 0.7,
    });

    


