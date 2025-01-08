import ollama from "ollama";
import fs from "fs";
let input = process.argv[2];
let q;
let ans;
let n = Math.floor(Math.random() * 3 + 1);

async function To_llm(q) {
  const response = await ollama.chat({
    model: "qwen2:0.5b",
    messages: [{ role: "user", content: q }],
  });
  ans = response.message.content;
  fs.writeFileSync(`Answers.txt`, ans, (err) => {
    if (err) {
      throw err;
    }
  });
}
//random number base pr case chooce krega
switch (input) {
  case "Professional_Writing":
    q = `./input/i1/q${n}.txt`;
    To_llm(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Creative_Writing":
    q = `./input/i2/q${n}.txt`;
    To_llm(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Technical_Content":
    q = `./input/i3/q${n}.txt`;
    To_llm(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Academic_Writing":
    q = `./input/i4/q${n}.txt`;
    To_llm(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Marketing_Content":
    q = `./input/i5/q${n}.txt`;
    To_llm(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
}
