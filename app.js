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

const heading = document.createElement("h1");
heading.innerText = "THESE ARE MY POKEMON!!!";
document.body.append(heading);
const section = document.createElement("section");
section.setAttribute("id", "container");
document.body.append(section);

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for (let i = 1; i < 159; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", `pokemon${i}`);
  div.classList.add("pokemonSection");
  const pokemon = document.createElement("img");
  pokemon.classList.add("pokemonImg");
  pokemon.src = ` ${baseURL}${i}.png`;
  div.append(pokemon);
  const num = document.createElement("span");
  num.innerText = `#${i}`;
  num.classList.add("pokeNums");
  div.append(num);
  section.append(div);
}

//EVENTS
//onClick
const v2Button = document.querySelector("#V2");
v2Button.onclick = function () {
  console.log("You clicked me!");
  console.log("great job Brock");
};

function scream() {
  console.log("aaaaaah");
}
v2Button.onmouseenter = scream;

function yell() {
  console.log("thank god..");
}
v2Button.onmouseleave = yell;

const v3Button = document.querySelector("#V3");

//addEventListener
v3Button.addEventListener("click", function () {
  alert("CLICKED!");
});
v3Button.addEventListener("mouseup", () => {
  console.log("mouseUP");
});

function twist() {
  console.log("twist");
}
function shout() {
  console.log("shout");
}
const tasButton = document.querySelector("#tas");

tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);

//color challenge
const hue = document.querySelector("#hue");
const colorButton = document.querySelector("#colorButton");
const swatch = document.querySelector("#swatch");

colorButton.addEventListener("click", () => {
  //   const rndColor = makeRndColor();
  swatch.style.backgroundColor = makeRndColor();
  hue.innerText = makeRndColor();
});

const makeRndColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

//Rndom button color

const rndButton = document.querySelectorAll("#buttonContainer button");
for (let each of rndButton) {
  each.addEventListener("click", () => {
    each.style.backgroundColor = makeRndColor();
  });
}

//Inside of an event, The keyword THIS refers to whatever element was triggered
const thisButton = document.querySelectorAll("#buttonContainer p");
for (let each of thisButton) {
  each.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRndColor();
}

//KEYPRESSES
const btnKlik = document.querySelector("#btnKlik");
btnKlik.addEventListener("click", (evt) => {
  console.log(evt);
});

const input = document
  .querySelector("#input")
  .addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    console.log(e.code);
  });

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("arrow up on");
      break;
    case "ArrowDown":
      console.log("arrow Down on");
      break;
    default:
      console.log("Ignored on");
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log("arrow up off");
      break;
    case "ArrowDown":
      console.log("arrow down off");
      break;
    default:
      console.log("Ignored off");
  }
});

//PReventing form default behaviors and using the event to update a list with the form input.

const form = document.querySelector("#shelterForm");
const formInput = document.querySelector("#catName");
const catList = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newCat = document.createElement("li");
  newCat.innerText = formInput.value;
  catList.appendChild(newCat);
  formInput.value = "";
  console.log("submitted");
});
const groceryForm = document.querySelector("#form");
const productInput = document.querySelector("#product");
const qtyInput = document.querySelector("#qty");
const groceryList = document.querySelector("#groceryList");

groceryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newProduct = document.createElement("li");
  newProduct.innerText = qtyInput.value + " " + productInput.value;
  groceryList.append(newProduct);
  qtyInput.value = "";
  productInput.value = "";
});

const liveUpdate = document.querySelector("#liveUpdate");
//triggers when you click off of an element after it had been changed
const changeInput = document.querySelector("#change");
changeInput.addEventListener("change", function (e) {
  console.log("it Changed!!");
  console.log(e);
});
//triggers on any new input
const inputInput = document.querySelector("#change");
inputInput.addEventListener("input", function (e) {
  console.log("input detected");
  liveUpdate.innerText = inputInput.value;
  console.log(e);
});

//e.StopPropagation keeps parent event listeners from triggering.
const singleAlertBtn = document.querySelector("#alertBtn");
singleAlertBtn.addEventListener("click", (e) => {
  alert("you cliky da button");
  e.stopPropagation();
});
