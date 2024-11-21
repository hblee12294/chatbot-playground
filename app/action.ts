import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";

import { openai } from "@/lib/openai";

export async function chat(formdata: FormData) {
  const schema = z.object({
    prompt: z.string(),
  });

  const { prompt } = schema.parse(formdata);

  console.log(prompt);
}
