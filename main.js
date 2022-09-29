// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphObject = {'♡':FULL_HEART,'♥':EMPTY_HEART}
const colorState = {"red":"","":"red"}

let likeButtons = document.querySelectorAll(".like-glyph")

for (let el of likeButtons) {
  
  el.addEventListener("click", (e) => {
    mimicServerCall()
    .then((res) => { 
     const heart = e.target;
     if ( heart.className === "activated-heart" )
     {
      heart.className.remove() 
      heart.textContent ="♡"
     } else{
      heart.textContent = "♥"
      heart.className = "activated-heart"
     }
    })

    .catch((error) => {document.getElementById("modal").className= ""
    setTimeout(function() {
      document.getElementById("modal").className = "hidden"} ,3000);
  })
  }
    )
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
