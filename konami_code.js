const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

document.body.addEventListener('keydown', function(e){
  const key = e.key

  if(key === codes[index]){
    index++
    if(index === codes.length){
      alert("You done it!")
      index = 0
    }
  }
  else{
    console.log("ope")
    index = 0
  }
})

function init(e) {



}
