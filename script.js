
var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let Number1=document.createElement("div");
Number1.setAttribute("id","Number1");

let name1=document.createElement("div");
name1.setAttribute("id","name");

let chapter=document.createElement("div");
chapter.setAttribute("id","chapter");

let line1=document.createElement("div");
line1.setAttribute("id","line1");

let line2=document.createElement("div");
line2.setAttribute("id","line2");

let explain=document.createElement("div");
explain.setAttribute("id","explain");


div.append(input,button,Number1,name1,chapter,line1,line2,explain);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    var url=`https://api-thirukkural.vercel.app/api?num=${res}`;
    
    let result=await fetch(url);
    let result1=await result.json();
   
    for(var key in result1){

     console.log(key,result1[key]);
     Number1.innerHTML=`THIRUKKURAL  NUMBER  :${result1.number}`;
  
      name1.innerHTML=`SECTION    :${result1.sect_tam}`;

      chapter.innerHTML=`CHAPTER NAME    :${result1.chapgrp_tam}`;

      line1.innerHTML=`LINE 1 :${result1.line1}`;

      line2.innerHTML=`LINE 2     :${result1.line2}`;

      explain.innerHTML=`TAMIL EXPLANATION :${result1.tam_exp}`;



}
}
