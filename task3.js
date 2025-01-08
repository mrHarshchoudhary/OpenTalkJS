import fs from 'fs'
import ollama from "ollama";
let q;

let ans;

async function To_llm(q,i) {

  const response = await ollama.chat({
    model: "qwen2:0.5b",
    messages: [{ role: "user", content: q }],
    
  });
  ans = response.message.content
  fs.writeFileSync(`./Answers/a${i}.txt`,ans,(err)=>{
    if(err){
      throw err;
    }
  })
}
for(let i=1;i<=3;i++){
q=`./Questions/q${i}.txt`
  To_llm(fs.readFileSync(q,'utf-8',(err)=>{
    if(err){
      throw err;
    }
  }),i)


}
console.log(`answer all in output file`);
