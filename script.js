// Event listener
document.getElementById("btn1").addEventListener("click", buildMadLib);


// Event function
function buildMadLib() {
  // Input
  var pluralNoun = document.getElementById("plural-noun").value;
  var adjective = document.getElementById("adjective").value;
  var verb = document.getElementById("verb").value;
  var noun = document.getElementById("noun").value;
  var noun2 = document.getElementById("noun-2").value;
  var adverb = document.getElementById("adverb").value;


  // Process
  let result = `"There are too many ${pluralNoun} on the ${adjective} airplane!" I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem." The ${noun2} bit me ${adverb}.`;


  // Output
  document.getElementById("result").innerHTML = result;
  document.getElementById("result").style.fontFamily = "Arial";
  document.getElementById("result").style.border = "2px solid orange";


  document.getElementById("html").style.backgroundImage =
    "url(images/plane.jpg)";
}


// ---------- BUTTON 2
// Event listener
document.getElementById("btn2").addEventListener("click", secondSentence);


// Event function
function secondSentence() {
  // Input
  var pluralNoun = document.getElementById("plural-noun").value;
  var adjective = document.getElementById("adjective").value;
  var verb = document.getElementById("verb").value;
  var noun = document.getElementById("noun").value;
  var noun2 = document.getElementById("noun-2").value;
  var adverb = document.getElementById("adverb").value;


  // Process
  let result = `There are ${adjective} ${pluralNoun} in this ${noun}! I ${adverb} ${verb} my ${noun2} to collect the ${pluralNoun}.`;


  // Output
  document.getElementById("result").innerHTML = result;
  document.getElementById("result").style.fontFamily = "Times New Roman";
  document.getElementById("result").style.border = "2px solid blue";
  document.getElementById("html").style.backgroundImage =
    "url(images/crystalcave.jpg)";
}


// ---------- Clear button
// Event listener
document.getElementById("clear").addEventListener("click", clearSentence);


// Event function
function clearSentence() {
  let result = ``;


  // Output
  document.getElementById("result").innerHTML = result;
}



