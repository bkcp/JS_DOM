//HTML ELEMENTS LOOK LIKE ARRAYS BUT DONT HAVE METHODS. THEY ARE ITERABLE AND HAVE INDICES THO

const allImages = document.getElementsByTagName("img");
for (let img of allImages) {
  console.log(img.src);
}
const squareImages = document.getElementsByClassName("square");
for (let img of squareImages) {
  console.log(img.src);
}

//Query Selector uses css tags to get elements, but only the FIRST element
const thirdImage = document.querySelector("img:nth-of-type(3)");
console.log(thirdImage);

const javaLink = document.querySelector('a[title ="Java"]');
console.log(javaLink);
//Query SelectorALL gives you all of em

const paras = document.querySelectorAll("p");
console.log(paras);

const anchorsInParagraphs = document.querySelectorAll("p a");
console.log(anchorsInParagraphs);

for (let links of anchorsInParagraphs) {
  console.log(links.href);
}

//Innertext vs Text Content vs InnerHTML
//Innertext is all text
//InnerHtml changes the actual markup

const headerUpdate = (document.querySelector("h1").innerHTML =
  "<i>Silkie Chickens</i>");
document.querySelector("h1").innerHTML += "<sup>The best chickens around</sup>";

//Setting attributes
const firstLink = document.querySelector("a");
firstLink.setAttribute("href", "http://www.google.com");

const changeType = document.querySelector('input[type = "text"]');
changeType.type = "password";
changeType.type = "color";
changeType.setAttribute("type", "text");

//CSS styles, this changes the styles inline. not a best practice.
const h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontSize = "3em";
h1.style.border = "2px solid blue";

const links = document.querySelectorAll("a");
for (let link of links) {
  link.style.color = "rgb(0,109,134";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

//to find out the current style being displayed pass in the element to window.getComputedStyle()
console.log(window.getComputedStyle(h1));

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const spans = document.querySelectorAll(".rainbow span");

for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i];
}

//Adding multiple classes to elements
const h2 = document.querySelector("h2");
h2.classList.add("purple");
h2.classList.add("border");
h2.classList.remove("purple");
//to see what is already added
console.log(h2.classList.contains("purple"));
//toggle
h2.classList.toggle("purple");

//Navigating Parent Child relationships
let divs = document.querySelector("div.rainbow");
console.log(divs.childElementCount);
console.log(divs.children);
console.log(divs.children[0]);

let squareImg = document.querySelector(".square");
console.log(squareImg.parentElement);
console.log(squareImg.nextElementSibling);
//nextSibling is just anything that comes next..text..blank space ect.
console.log(squareImg.nextSibling);

//Appending and Removing Children
const newImg = document.createElement("img");
newImg.src =
  "https://cdnb.artstation.com/p/assets/images/images/016/804/553/medium/german-reina-3.jpg?1553541939";

newImg.classList.add("square");

document.body.appendChild(newImg);

const newH3 = document.createElement("h3");
newH3.innerText = "I am NEW";
document.body.appendChild(newH3);

//REMOVE  OG STYLE
const newH3a = document.createElement("h3");
newH3a.innerText = "I am removed";
document.body.appendChild(newH3a);
document.body.removeChild(newH3a);

//REMOVE newSTYLE
const newH3b = document.createElement("h3");
newH3b.innerText = "I am removed";
document.body.appendChild(newH3b);
newH3b.remove();

//append vs prepend
const newP = document.createElement("p");
newP.append("just some text  ", " another set of text  ", "even more");
newP.prepend("this comes first ");
document.body.appendChild(newP);

const newB = document.createElement("b");
newB.append("HI  ");
newP.prepend(newB);

//insertAdjacentElement

const newH2 = document.createElement("h2");
newH2.append(" this is coming inbetween other elements");
const firstH1 = document.querySelector("h1");
firstH1.insertAdjacentElement("afterend", newH2);

//POKEMON CHALLENGE
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
