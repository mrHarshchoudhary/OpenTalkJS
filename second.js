
import fs from 'fs';

import ollama from "ollama";

async function AI_main(q) {
    const response = await ollama.chat({
        model: "qwen2:0.5b",
        messages: [{ role: "user", content: q }],
    });
    let a = response.message.content;
    fs.writeFile("a.txt",a,(err)=>{
        if(err){
            throw err;
        }
    });
}

AI_main(fs.readFileSync("q.txt", 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }));

