const fs=require('fs')
// in async format
fs.readFile('./forfs1/forfs.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
   const first=result;
   fs.readFile('./forfs1/forfs2.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
   const second=result;
   fs.writeFile('./forfs1/newwrite.txt',`here is our mixture of file ${first}${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        
   })
   })
    
})