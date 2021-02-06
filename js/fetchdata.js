fetch("json_data/data.json")
.then(res=>{return res.json()})
.then(d=>{
    details(d.details);
    other(d.multipleData);
})
var root=document.getElementById("root");
function details(cse){
var n=document.createElement("h1");
n.setAttribute("class","name");
n.textContent=cse.name;
root.appendChild(n);

var m=document.createElement("h1");
m.setAttribute("class","mobile");
m.textContent=cse.mobile;
root.appendChild(m);
}

 function other(r){
 
     var ul=document.createElement("ul");
     root.appendChild(ul);
     for(i in r){
     var li=document.createElement("li");
     li.textContent=r[i].name;
     li.setAttribute("class","text-info")
     ul.appendChild(li);

     var li1=document.createElement("li");
     li1.textContent=r[i].name;
     li1.setAttribute("class","text-danager")
     ul.appendChild(li1);
     }
 }

