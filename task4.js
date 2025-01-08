let input=process.argv[2]
// let n=parseInt(process.argv[3])
console.log(input);
import ollama from "ollama";
import fs from 'fs'
let n=Math.floor(Math.random()*3+1)
let q
let ans
async function To_llm(q) {

  const response = await ollama.chat({
    model: "qwen2:0.5b",
    messages: [{ role: "user", content: q }],
    
  });
  ans = response.message.content
  fs.writeFileSync(`Answers.txt`,ans,(err)=>{
    if(err){
      throw err;
    }
  })
}
//random number base pr case chooce krega
switch(input){
   case "Professional_Writing":
    if(n==1){
      q=`./input/i1/q1.txt`;
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
          if(err){
            throw err;
          }
        }))
    }
    else if(n==2){
     q=`./input/i1/q2.txt`
     To_llm(fs.readFileSync(q,'utf-8',(err)=>{
      if(err){
        throw err;
      }
    }))
    }
    else if(n==3){
      q=`./input/i1/q3.txt`
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
        if(err){
          throw err;
        }
      }))
     }
    break
   case "Creative_Writing":
    if(n==1){
      q=`./input/i2/q1.txt`;
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
          if(err){
            throw err;
          }
        }))
    }
    else if(n==2){
     q=`./input/i2/q2.txt`
     To_llm(fs.readFileSync(q,'utf-8',(err)=>{
      if(err){
        throw err;
      }
    }))
    }
    else if(n==3){
      q=`./input/i2/q3.txt`
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
        if(err){
          throw err;
        }
      }))
     }
    break
   case "Technical_Content":
    if(n==1){
      q=`./input/i3/q1.txt`;
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
          if(err){
            throw err;
          }
        }))
    }
    else if(n==2){
     q=`./input/i3/q2.txt`
     To_llm(fs.readFileSync(q,'utf-8',(err)=>{
      if(err){
        throw err;
      }
    }))
    }
    else if(n==3){
      q=`./input/i3/q3.txt`
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
        if(err){
          throw err;
        }
      }))
     }
    break
   case "Academic_Writing":
    if(n==1){
      q=`./input/i4/q1.txt`;
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
          if(err){
            throw err;
          }
        }))
    }
    else if(n==2){
     q=`./input/i4/q2.txt`
     To_llm(fs.readFileSync(q,'utf-8',(err)=>{
      if(err){
        throw err;
      }
    }))
    }
    else if(n==3){
      q=`./input/i4/q3.txt`
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
        if(err){
          throw err;
        }
      }))
     }
    break
   case "Marketing_Content":
    if(n==1){
      q=`./input/i5/q1.txt`;
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
          if(err){
            throw err;
          }
        }))
    }
    else if(n==2){
     q=`./input/i5/q2.txt`
     To_llm(fs.readFileSync(q,'utf-8',(err)=>{
      if(err){
        throw err;
      }
    }))
    }
    else if(n==3){
      q=`./input/i5/q3.txt`
      To_llm(fs.readFileSync(q,'utf-8',(err)=>{
        if(err){
          throw err;
        }
      }))
     }
    break    
   
}