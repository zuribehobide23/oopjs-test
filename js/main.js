import { Makina } from "./makina.js";
import { Gizaki } from "./gizaki.js";
import { Estralurtar } from "./estralurtar.js";

let zelai = [];

for (let i=0; i<50; i++){
    zelai.push(new Estralurtar("e"+(i+1)))
}
for (let i=50; i<100; i++){
    zelai.push(new Gizaki("g"+(i+1)))
}
for (let i=100; i<150; i++){
    zelai.push(new Makina("m"+(i+1)))
}

console.log(zelai);

while(zelai.length > 1){
    
    for(let i=0; i<zelai.length-1;i=i+2){
        zelai[i].borrokatu(zelai[i+1])
        
        if(zelai[i].osasuna <= 0){
            zelai.splice(i,1)
        }
        if(zelai[i+1].osasuna <= 0){
            zelai.splice(i+1,1)
        }
       
    }
   
}