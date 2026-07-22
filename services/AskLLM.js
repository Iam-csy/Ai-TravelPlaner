import { weatherTool } from "../Tool/weatherTool.js";
import UserPrompt from "../prompt/UserPrompt.js";
import { llm } from "../models/model.js";

export const AskLLM = async (city, question) => {

    const weather = await weatherTool(city);

    const chain = UserPrompt.pipe(llm);

    const response = await chain.invoke({

        weather,
        question

    });

    return response.content;
};