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
