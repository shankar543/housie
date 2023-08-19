
    var mytable = document.getElementById("table")
    mytable.addEventListener("click",function(e){
        if(e.target.innerText && newarr.indexOf(+e.target.innerText)!=-1){
            
            e.target.classList.add("green");

        }
    })
    var top = document.getElementById("top");
    var center = document.getElementById("center");
    var low = document.getElementById("low");
    var person={};
    class user{
        table=[];
        name;
        constructor(name,table){
            this.name=name;
            this.table=[];
            this.table.push(table)
            
        }
    }
    window.onload=function(){
    let name = "shankar" || window.prompt("hi your name place");
    let tab  = new table();
    person = new user(name,tab)
    fillTable();
    console.log(newarr);   
}
    class table{
    table = {};
    constructor(){

    this.table["top"]    = this.row();
    this.table["center"] = this.row();
    this.table["low"]    = this.row();
;}

row(){
let r = new Set();
//r.size=0;
let holes = new Set();
//holes.size=0;

while(r.size != 9){
r.add(this.getRandom(1,100))
}

while(holes.size != 4){
    holes.add(this.getRandom(1,9))
}
var rowlist = Array.from(r);
var holeslist = Array.from(holes);
var finalrow=[];
while(holeslist.length){
rowlist[holeslist.shift()]="@"
}
finalrow=rowlist;
return finalrow;
}

getRandom(minimum,maximum){
    let min=Math.floor(minimum);
    let max=Math.ceil(maximum);
    return Math.floor((Math.random()*(max-min))+min);
}
}

function fillTable(){
    let tab = person.table[0] || new table();
    var tabletop = document.createElement("tr");
    var tablecenter = document.createElement("tr");
    var tablelow = document.createElement("tr");
    for(let x of tab.table.top){
        let td=document.createElement("td")
        td.innerText = x;
        if(x=="@"){
            td.classList.add("hole");
            td.innerText = "";
        }
        tabletop.appendChild(td)
        //JSON.parse(JSON.stringify(td))
    }
    for(let x of tab.table.center){
        let td=document.createElement("td")
        td.innerText = x;
        if(x=="@"){
            td.classList.add("hole");
            td.innerText = "";
        }
        tablecenter.appendChild(td)
    }
    for(let x of tab.table.low){
        let td=document.createElement("td")
        td.innerText = x;
        if(x=="@"){
            td.classList.add("hole");
            td.innerText = "";
        }
        tablelow.appendChild(td)
    }
mytable.appendChild(tabletop)
mytable.appendChild(tablecenter)
mytable.appendChild(tablelow)
    
}



