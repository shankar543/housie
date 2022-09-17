const displaynum= document.getElementsByClassName("number")[0]
const disaplayAll = document.getElementsByClassName("displayAll")[0]
var size=0;
var set = new Set();
var arr=[]
let newarr=[]

function getRandom(minimum,maximum){
    let min=Math.floor(minimum);
    let max=Math.ceil(maximum);
    return Math.floor(Math.random()*max-min+min);
}

function isSizeIncreased(num){
    let updated=false
    updatedsetsize= set.add(num).size;
    if(size+1 === updatedsetsize){
        size = updatedsetsize
        updated=true;
    }
    return updated;
}

function start(){
    while(size<=99){
        let num=getRandom(1,100)
        if(isSizeIncreased(num)){
            if(num){
                arr.push(num);
            }
            }
    }
}
function display(){
    let currentnum=arr.shift()
if(currentnum){
    newarr.push(currentnum)
    displaynum.innerHTML="<h1>"+currentnum+"</h1>";
    ele=document.createElement("span")
    ele.innerText=currentnum
    //disaplayAll.innerHTML="<h1>"+newarr+"</h1>";
    disaplayAll.appendChild(ele)
}else{
    if(newarr.length==99){
     clearInterval(timerstart);
     let thankyouele = document.createElement("div")
     thankyouele.innerText="game completed thankyou";
     document.body.appendChild(thankyouele)
    }
}
}
start();
var timerstart=setInterval(display,4000)