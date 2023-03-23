// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIcon = document.querySelectorAll(".like-glyph")

function liker(e) {
  let heart = e.target;
  mimicServerCall("url")
  .then(()=>{
    if(heart.innerHTML === EMPTY_HEART){
      heart.innerHTML = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerHTML = EMPTY_HEART;
      heart.className = "";
    }
  })
  .catch((err)=>{
    let modal = document.querySelector("#modal")
    modal.innerHTML = err;
    modal.className = "";
    setTimeout(()=>{modal.className = "hidden"},3000)
  })
}

for(let likeHeart of heartIcon){
  likeHeart.addEventListener("click", liker)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
