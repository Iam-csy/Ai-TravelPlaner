import { ChatOllama } from "@langchain/ollama";




   export const llm = new ChatOllama({
        model: "llama3.2",
        temperature: 0.7,
    });

    


