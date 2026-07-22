
import { ChatOllama } from "@langchain/ollama";
import { weather } from "../Tool/weatherTool";

const ask = async (data) => {

    const resp=weather(data);
    const llm = new ChatOllama({
        model: "llama3.2",
        temperature: 0.7,
    });

    const response = await llm.invoke(res);

    return response.content;
};

export default ask;