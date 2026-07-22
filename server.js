import express from "express";
import { AskLLM } from "./services/AskLLM.js";

const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/ask", async (req, res) => {

    try {

        const { city, question } = req.body;

        const answer = await AskLLM(city, question);


        res.send(answer)

        res.json({
            success: true,
            answer
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});