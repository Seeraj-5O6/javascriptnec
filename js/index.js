var container=document.querySelector("#root");
var card=document.createElement("div");
card.setAttribute("id","card");
container.appendChild(card);

var image=document.createElement("img");
image.src="../t.jpg";
image.alt="allu";
image.style.width="50%";
card.appendChild(image);