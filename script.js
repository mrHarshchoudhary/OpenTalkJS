import ollama from "ollama";
const response = await ollama.chat({
  model: "qwen2:0.5b",
  messages: [{ role: "user", content: "Generate marketing emails" }],
});
console.log(response.message.content);
