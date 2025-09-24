import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST() {
    try {
        const {text } = await generateText({
            model: openai("gpt-4.1-nano"),
            prompt: "Explain what an LLM is in simple terms"
        })

        return Response.json({ text });
    }catch (error) {
        console.error("Error generating text:", error)
        return Response.json({ error: "Failed to generate text"}, { status: 500 })
    }
}