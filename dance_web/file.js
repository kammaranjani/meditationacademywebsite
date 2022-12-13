const fs=require("fs");
let one=fs.readFileSync("./fi.txt", utf-8);
// if(one.includes("ran")){
//     console.log("yes");
//     fs.writeFileSync("fil.txt",one);
// }
one=one.replace("ran","rah");
console.log(one);
    fs.writeFileSync("fil.txt",one);
