var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var thingsToDoInNYC = ["visit the Empire State Building", "walk across the Brooklyn Bridge", "see a Broadway show", "visit the Metropolitan Museum of Art", "eat street vendor food", "go to Chinatown"];

executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(visitorName) {
  var randomIndex = Math.floor(Math.random() * thingsToDoInNYC.length);
  var selectedRandomActivity = thingsToDoInNYC[randomIndex];
  outputParagraph.innerText = "Hi " + visitorName + ", you should " + selectedRandomActivity + " when you visit NYC!";
}

function restyle() {
  var randR = Math.floor(Math.random() * 256);
  var randG = Math.floor(Math.random() * 256);
  var randB = Math.floor(Math.random() * 256);
  var randOutputColor = "rgb("+randR+","+randG+","+randB+")";
  var randFontSize = Math.floor(Math.random() * 21) + 20;
  var randRotate = Math.floor(Math.random() * 21) - 10;
  outputParagraph.style.backgroundColor = randOutputColor;
  outputParagraph.style.fontSize = randFontSize + "px";
  outputParagraph.style.transform = "rotate(" + randRotate + "deg)";
}
