import fs from "fs"

const q=fs.readFileSync("q.txt","utf-8")

import ollama from "ollama";

const response = await ollama.chat({
  model: "qwen2:0.5b",
  messages: [{ role: "user", content: q }],
});
const a=response.message.content
fs.writeFileSync("a.txt",a)
console.log(`answer print succesfully in a.txt file`);



