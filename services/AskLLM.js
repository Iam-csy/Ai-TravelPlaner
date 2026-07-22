

import { weatherTool } from "../Tool/weatherTool";
import {UserPrompt} from"../prompt/UserPrompt";

import {llm} from "../models/model.js"

export const AskLLM = async (data) => {

    const res=weatherTool(data);



    const chain=UserPrompt.pipe(llm);


    const response =chain.invoke(res);


 

    return response.content;
};

