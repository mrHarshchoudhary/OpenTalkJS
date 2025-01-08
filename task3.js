import fs from 'fs'
import ollama from "ollama";
let q;

let ans;
for(let i=1;i<=3;i++){
q=`./Question/q${i}.txt`
console.log(`${i}.txt`);

fs.writeFileSync(`./Answers/a${i}.txt`,"response here")
const response = await ollama.chat({
  model: "qwen2:0.5b",
  messages: [{ role: "user", content: q }],
  
});
ans = response.message.content
fs.writeFileSync("./Answers/${i}.txt",ans,"utf-8")
}
console.log(`answer all in output file`);
