// 
function loadJSON(file,callback){
   var ajax=new XMLHttpRequest();
   ajax.overrideMimeType("application/json");
   ajax.open("GET",file,true);
   ajax.onreadystatechange=function(){
       if(ajax.readyState===4 && ajax.status===200){
           callback(ajax.responseText);
       }
   }
ajax.send();
}
loadJSON("json_data/data.json",function(text){
    var d=JSON.parse(text);
    console.log(d);
    details(d.details);
    other(d.muitipleData);
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
     ul.appendChild(li);

     var li1=document.createElement("li");
     li1.textContent=r[i].name;
     ul.appendChild(li1);
     }
 }

