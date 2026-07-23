import { weatherTool } from "../Tool/weatherTool.js";
import UserPrompt from "../prompt/UserPrompt.js";
import { llm } from "../models/model.js";

import { PlannerSchema } from "./PlannerSchema.js";

// import HotelTool from "../Tool/HotelTool.js";




export const PlannerAgent = async (city, question) => {

    const weather = await weatherTool(city);
    // const hotelInfo = HotelTool(city);

    const strutured =llm.withStructuredOutput(PlannerSchema);

    const chain = UserPrompt.pipe(strutured);

    const response = await chain.invoke({

        weather,
        // hotelInfo,
        question

    });

    return response.content;
};