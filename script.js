var words=[];
let chosenWord;
let word1A=document.getElementById("word1A");
let word1B=document.getElementById("word1B");
let word1C=document.getElementById("word1C");
let word1D=document.getElementById("word1D");
let word1E=document.getElementById("word1E");
let word2A=document.getElementById("word2A");
let word2B=document.getElementById("word2B");
let word2C=document.getElementById("word2C");
let word2D=document.getElementById("word2D");
let word2E=document.getElementById("word2E");
let word3A=document.getElementById("word3A");
let word3B=document.getElementById("word3B");
let word3C=document.getElementById("word3C");
let word3D=document.getElementById("word3D");
let word3E=document.getElementById("word3E");
let word4A=document.getElementById("word4A");
let word4B=document.getElementById("word4B");
let word4C=document.getElementById("word4C");
let word4D=document.getElementById("word4D");
let word4E=document.getElementById("word4E");
let word5A=document.getElementById("word5A");
let word5B=document.getElementById("word5B");
let word5C=document.getElementById("word5C");
let word5D=document.getElementById("word5D");
let word5E=document.getElementById("word5E");
let word6A=document.getElementById("word6A");
let word6B=document.getElementById("word6B");
let word6C=document.getElementById("word6C");
let word6D=document.getElementById("word6D");
let word6E=document.getElementById("word6E");
let word1=document.getElementById("word1");
let word2=document.getElementById("word2");
let word3=document.getElementById("word3");
let word4=document.getElementById("word4");
let word5=document.getElementById("word5");
let word6=document.getElementById("word6");
let restaurantV=document.getElementById("restaurantV");
let verbV=document.getElementById("verbV");
let travelV=document.getElementById("travelV");
let enterVocab=document.getElementById("enterVocab");

restaurantV.addEventListener("click", function(){
  words.push("payer","boire","mangé","soupe","pomme","poire","fruit","pâtes","glace","crèpe");
  restaurantV.innerText="Choisi";
})
verbV.addEventListener("click", function(){
  words.push("aller","avoir","venir","tenir","faire","finir","vivre","aimer");
  verbV.innerText="Choisi";
})
travelV.addEventListener("click", function(){
  words.push("salut","merci","aider","hôtel","plage","métro","coûte");
  travelV.innerText="Choisi";
})
enterVocab.addEventListener("click", function(){
  let randNum=Math.floor(Math.random() * words.length);
  let word = words[randNum];
  chosenWord=word;
  console.log("Final chosen word:" + word);
})

word1A.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word1A.innerText=guess;
})
word1B.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word1B.innerText=guess;
})
word1C.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word1C.innerText=guess;
})
word1D.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word1D.innerText=guess;
})
word1E.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word1E.innerText=guess;
})

word2A.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word2A.innerText=guess;
})
word2B.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word2B.innerText=guess;
})
word2C.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word2C.innerText=guess;
})
word2D.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word2D.innerText=guess;
})
word2E.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word2E.innerText=guess;
})
word3A.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word3A.innerText=guess;
})
word3B.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word3B.innerText=guess;
})
word3C.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word3C.innerText=guess;
})
word3D.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word3D.innerText=guess;
})
word3E.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word3E.innerText=guess;
})
word4A.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word4A.innerText=guess;
})
word4B.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word4B.innerText=guess;
})
word4C.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word4C.innerText=guess;
})
word4D.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word4D.innerText=guess;
})
word4E.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word4E.innerText=guess;
})
word5A.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word5A.innerText=guess;
})
word5B.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word5B.innerText=guess;
})
word5C.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word5C.innerText=guess;
})
word5D.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word5D.innerText=guess;
})
word5E.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word5E.innerText=guess;
})
word6A.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word6A.innerText=guess;
})
word6B.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word6B.innerText=guess;
})
word6C.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word6C.innerText=guess;
})
word6D.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word6D.innerText=guess;
})
word6E.addEventListener("click", function(){
  var guess = window.prompt("Enter a letter:");
  while (!validLetter(guess))
  {
    guess = window.prompt("Enter a letter:");
  }
  word6E.innerText=guess;
})

word1.addEventListener("click", function(){
  if (word1A.innerText!=="_"&&word1B.innerText!=="_"&&word1C.innerText!=="_"&&word1D.innerText!=="_"&&word1E.innerText!=="_")
  {
      const     guess1=word1A.innerText+word1B.innerText+word1C.innerText+word1D.innerText+word1E.innerText;
    console.log("Word 1: " + guess1);
    word1.innerText=guess1;
    var colors=evaluateLetters(guess1);
    <!--word1-->
    if (colors.charAt(0)==="3")
    {
      word1A.id="word1A3";
    }
    else if (colors.charAt(0)==="2")
    {
      word1A.id="word1A2";
    }
    else
    {
      word1A.id="word1A1"
    }
    if (colors.charAt(1)==="3")
    {
      word1B.id="word1B3";
    }
    else if (colors.charAt(1)==="2")
    {
      word1B.id="word1B2";
    }
    else
    {
      word1B.id="word1B1"
    }
    if (colors.charAt(2)==="3")
    {
      word1C.id="word1C3";
    }
    else if (colors.charAt(2)==="2")
    {
      word1C.id="word1C2";
    }
    else
    {
      word1C.id="word1C1"
    }
    if (colors.charAt(3)==="3")
    {
      word1D.id="word1D3";
    }
    else if (colors.charAt(3)==="2")
    {
      word1D.id="word1D2";
    }
    else
    {
      word1D.id="word1D1"
    }
    if (colors.charAt(4)==="3")
    {
      word1E.id="word1E3";
    }
    else if (colors.charAt(4)==="2")
    {
      word1E.id="word1E2";
    }
    else
    {
      word1E.id="word1E1"
    }
    if (word1A.id==="word1A1"&&word1B.id==="word1B1"&&word1C.id==="word1C1"&&word1D.id==="word1D1"&&word1E.id==="word1E1")
    {
      alert("Bravo!Vous avez deviné le Wordle en une seule supposition!");
    }
  }
  else
  {
    alert("Invalid input. Enter a letter for each spot.");
  }
})
word2.addEventListener("click", function(){
  if (word2A.innerText!=="_"&&word2B.innerText!=="_"&&word2C.innerText!=="_"&&word2D.innerText!=="_"&&word2E.innerText!=="_")
  {
      const     guess2=word2A.innerText+word2B.innerText+word2C.innerText+word2D.innerText+word2E.innerText;
    console.log("Word 2: " + guess2);
    word2.innerText=guess2;
    var colors=evaluateLetters(guess2);
    <!--word2-->
    if (colors.charAt(0)==="3")
    {
      word2A.id="word2A3";
    }
    else if (colors.charAt(0)==="2")
    {
      word2A.id="word2A2";
    }
    else
    {
      word2A.id="word2A1"
    }
    if (colors.charAt(1)==="3")
    {
      word2B.id="word2B3";
    }
    else if (colors.charAt(1)==="2")
    {
      word2B.id="word2B2";
    }
    else
    {
      word2B.id="word2B1"
    }
    if (colors.charAt(2)==="3")
    {
      word2C.id="word2C3";
    }
    else if (colors.charAt(2)==="2")
    {
      word2C.id="word2C2";
    }
    else
    {
      word2C.id="word2C1"
    }
    if (colors.charAt(3)==="3")
    {
      word2D.id="word2D3";
    }
    else if (colors.charAt(3)==="2")
    {
      word2D.id="word2D2";
    }
    else
    {
      word2D.id="word2D1"
    }
    if (colors.charAt(4)==="3")
    {
      word2E.id="word2E3";
    }
    else if (colors.charAt(4)==="2")
    {
      word2E.id="word2E2";
    }
    else
    {
      word2E.id="word2E1"
    }
    if (word2A.id==="word2A1"&&word2B.id==="word2B1"&&word2C.id==="word2C1"&&word2D.id==="word2D1"&&word2E.id==="word2E1")
    {
      alert("Bravo! Vous avez deviné le Wordle en deux suppositions!");
    }
  }
  else
  {
    alert("Invalid input. Enter a letter for each spot.");
  }
})

word3.addEventListener("click", function(){
  if (word3A.innerText!=="_"&&word3B.innerText!=="_"&&word3C.innerText!=="_"&&word3D.innerText!=="_"&&word3E.innerText!=="_")
  {
    const guess3=word3A.innerText+word3B.innerText+word3C.innerText+word3D.innerText+word3E.innerText;
    console.log("Word 3: " + guess3);
    word3.innerText=guess3;
    var colors=evaluateLetters(guess3);
    <!--word3-->
    if (colors.charAt(0)==="3")
    {
      word3A.id="word3A3";
    }
    else if (colors.charAt(0)==="2")
    {
      word3A.id="word3A2";
    }
    else
    {
      word3A.id="word3A1"
    }
    if (colors.charAt(1)==="3")
    {
      word3B.id="word3B3";
    }
    else if (colors.charAt(1)==="2")
    {
      word3B.id="word3B2";
    }
    else
    {
      word3B.id="word3B1"
    }
    if (colors.charAt(2)==="3")
    {
      word3C.id="word3C3";
    }
    else if (colors.charAt(2)==="2")
    {
      word3C.id="word3C2";
    }
    else
    {
      word3C.id="word3C1"
    }
    if (colors.charAt(3)==="3")
    {
      word3D.id="word3D3";
    }
    else if (colors.charAt(3)==="2")
    {
      word3D.id="word3D2";
    }
    else
    {
      word3D.id="word3D1"
    }
    if (colors.charAt(4)==="3")
    {
      word3E.id="word3E3";
    }
    else if (colors.charAt(4)==="2")
    {
      word3E.id="word3E2";
    }
    else
    {
      word3E.id="word3E1"
    }
    if (word3A.id==="word3A1"&&word3B.id==="word3B1"&&word3C.id==="word3C1"&&word3D.id==="word3D1"&&word3E.id==="word3E1")
    {
      alert("Bravo! Vous avez deviné le Wordle en trois suppositions!");
    }
  }
  else
  {
    alert("Invalid input. Enter a letter for each spot.");
  }
})

word4.addEventListener("click", function(){
  if (word4A.innerText!=="_"&&word4B.innerText!=="_"&&word4C.innerText!=="_"&&word4D.innerText!=="_"&&word4E.innerText!=="_")
  {
      const     guess4=word4A.innerText+word4B.innerText+word4C.innerText+word4D.innerText+word4E.innerText;
    console.log("Word 4: " + guess4);
    word4.innerText=guess4;
    var colors=evaluateLetters(guess4);
    <!--word4-->
    if (colors.charAt(0)==="3")
    {
      word4A.id="word4A3";
    }
    else if (colors.charAt(0)==="2")
    {
      word4A.id="word4A2";
    }
    else
    {
      word4A.id="word4A1"
    }
    if (colors.charAt(1)==="3")
    {
      word4B.id="word4B3";
    }
    else if (colors.charAt(1)==="2")
    {
      word4B.id="word4B2";
    }
    else
    {
      word4B.id="word4B1"
    }
    if (colors.charAt(2)==="3")
    {
      word4C.id="word4C3";
    }
    else if (colors.charAt(2)==="2")
    {
      word4C.id="word4C2";
    }
    else
    {
      word4C.id="word4C1"
    }
    if (colors.charAt(3)==="3")
    {
      word4D.id="word4D3";
    }
    else if (colors.charAt(3)==="2")
    {
      word4D.id="word4D2";
    }
    else
    {
      word4D.id="word4D1"
    }
    if (colors.charAt(4)==="3")
    {
      word4E.id="word4E3";
    }
    else if (colors.charAt(4)==="2")
    {
      word4E.id="word4E2";
    }
    else
    {
      word4E.id="word4E1"
    }
    if (word4A.id==="word4A1"&&word4B.id==="word4B1"&&word4C.id==="word4C1"&&word4D.id==="word4D1"&&word4E.id==="word4E1")
    {
      alert("Bravo! Vous avez deviné le Wordle en quatre suppositions!");
    }
  }
  else
  {
    alert("Invalid input. Enter a letter for each spot.");
  }
})

word5.addEventListener("click", function(){
  if (word5A.innerText!=="_"&&word5B.innerText!=="_"&&word5C.innerText!=="_"&&word5D.innerText!=="_"&&word5E.innerText!=="_")
  {
      const     guess5=word5A.innerText+word5B.innerText+word5C.innerText+word5D.innerText+word5E.innerText;
    console.log("Word 5: " + guess5);
    word5.innerText=guess5;
    var colors=evaluateLetters(guess5);
    <!--word5-->
    if (colors.charAt(0)==="3")
    {
      word5A.id="word5A3";
    }
    else if (colors.charAt(0)==="2")
    {
      word5A.id="word5A2";
    }
    else
    {
      word5A.id="word5A1"
    }
    if (colors.charAt(1)==="3")
    {
      word5B.id="word5B3";
    }
    else if (colors.charAt(1)==="2")
    {
      word5B.id="word5B2";
    }
    else
    {
      word5B.id="word5B1"
    }
    if (colors.charAt(2)==="3")
    {
      word5C.id="word5C3";
    }
    else if (colors.charAt(2)==="2")
    {
      word5C.id="word5C2";
    }
    else
    {
      word5C.id="word5C1"
    }
    if (colors.charAt(3)==="3")
    {
      word5D.id="word5D3";
    }
    else if (colors.charAt(3)==="2")
    {
      word5D.id="word5D2";
    }
    else
    {
      word5D.id="word5D1"
    }
    if (colors.charAt(4)==="3")
    {
      word5E.id="word5E3";
    }
    else if (colors.charAt(4)==="2")
    {
      word5E.id="word5E2";
    }
    else
    {
      word5E.id="word5E1"
    }
    if (word5A.id==="word5A1"&&word5B.id==="word5B1"&&word5C.id==="word5C1"&&word5D.id==="word5D1"&&word5E.id==="word5E1")
    {
      alert("Bravo! Vous avez deviné le Wordle en cinq suppositions!");
    }
  }
  else
  {
    alert("Invalid input. Enter a letter for each spot.");
  }
})

word6.addEventListener("click", function(){
  if (word6A.innerText!=="_"&&word6B.innerText!=="_"&&word6C.innerText!=="_"&&word6D.innerText!=="_"&&word6E.innerText!=="_")
  {
      const     guess6=word6A.innerText+word6B.innerText+word6C.innerText+word6D.innerText+word6E.innerText;
    console.log("Word 6: " + guess6);
    word6.innerText=guess6;
    var colors=evaluateLetters(guess6);
    <!--word6-->
    if (colors.charAt(0)==="3")
    {
      word6A.id="word6A3";
    }
    else if (colors.charAt(0)==="2")
    {
      word6A.id="word6A2";
    }
    else
    {
      word6A.id="word6A1"
    }
    if (colors.charAt(1)==="3")
    {
      word6B.id="word6B3";
    }
    else if (colors.charAt(1)==="2")
    {
      word6B.id="word6B2";
    }
    else
    {
      word6B.id="word6B1"
    }
    if (colors.charAt(2)==="3")
    {
      word6C.id="word6C3";
    }
    else if (colors.charAt(2)==="2")
    {
      word6C.id="word6C2";
    }
    else
    {
      word6C.id="word6C1"
    }
    if (colors.charAt(3)==="3")
    {
      word6D.id="word6D3";
    }
    else if (colors.charAt(3)==="2")
    {
      word6D.id="word6D2";
    }
    else
    {
      word6D.id="word6D1"
    }
    if (colors.charAt(4)==="3")
    {
      word6E.id="word6E3";
    }
    else if (colors.charAt(4)==="2")
    {
      word6E.id="word6E2";
    }
    else
    {
      word6E.id="word6E1"
    }
    if (word6A.id==="word6A1"&&word6B.id==="word6B1"&&word6C.id==="word6C1"&&word6D.id==="word6D1"&&word6E.id==="word6E1")
    {
      alert("Bravo! Vous avez deviné le Wordle en six suppositions!");
    }
  }
  else
  {
    alert("Invalid input. Enter a letter for each spot.");
  }
})
      
function validLetter(letter)
{
  if (letter.length!==1)
  {
    return false;
  }
  return /^[a-zA-Z\u00C0-\u00FF]*$/.test(letter);
}

function evaluateLetters(word)
{
  var colors="";
  for (i=0;i<5;i++)
  {
    if (word.charAt(i).toLowerCase()===chosenWord.charAt(i))
    {
     colors+=1; 
    }
    else if (chosenWord.indexOf(word.charAt(i).toLowerCase())!==-1)
    {
      colors+=2;
    }
    else
    {
      colors+=3;
    }
  }
  console.log(colors);
  return colors;
}



