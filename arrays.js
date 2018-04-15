var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]



function destructivelyAddElementToBeginningOfArray(chocolateBars, c) {
  return [chocolateBars.unshift(c)];}

function addElementToEndOfArray(chocolateBars, c) {
  return [...chocolateBars, c];}

function destructivelyAddElementToEndOfArray(chocolateBars, c) { return [chocolateBars.push(c)];}

function accessElementInArray(chocolateBars, c) {
  return chocolateBars[c];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.shift();
}

function removeElementFromBeginningOfArray(chocolateBars){
  return [chocolateBars.slice(1)];
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return [chocolateBars.pop()];
}

function removeElementFromEndOfArray(chocolateBars){
  return [chocolateBars.slice(0, chocolateBars.length-1)];
}

