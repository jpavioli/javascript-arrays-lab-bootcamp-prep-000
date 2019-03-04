//define kittens array 
var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] 

// distructively add a kitten to the end of kittens array
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

// destructively prepend a kitten to the beggining of the array
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

// destructively remove the last kitten from the array
function destructivelyRemoveLastKitten() {
  return kittens.pop(0,kittens.length-1)
}
