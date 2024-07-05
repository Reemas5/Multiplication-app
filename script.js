const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionE1 =document.getElementById("question")
const inpt1 = document.getElementById("input")
//const subm1= document.getElementsByClassName("btn")
const form1=document.getElementById("form")
questionE1.innerText=`The multipication of ${num1} and ${num2} is ?`
//const ans= num1 * num2;
const score1=document.getElementById("score")
let score= JSON.parse(localstorage.getItem("score"));
if(!score){
    score=0;
} 
const ans1= num1 * num2;
//questionE1.innerText=`The multipication of ${num1} and ${num2} is ?`
score1.innerText=`reewrwr`
form1.addEventListener("submit", ()=>{
    const gh= +inpt1.value;
    if (gh===ans1){
        score ++;
        updatelocalstorage();
    }  
    else{
        score--;
        updatelocalstorage();

    }
});
function updatelocalstorage(){
    localstorage.setItem("score"),JSON.stringify(score)
}
