const cats = [ 
    "Milo", 
    "Otis", 
    "Garfield"
    
];


function destructivelyAppendCat(name){
const firstCat = "Milo" ;
const secondCat = "Otis";
const thirdCat = "Garfield"; 

}

function destructivelyAppendCat(name){
    cats.push("Ralph");
const fourthCat = "Ralph" ;

}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
const fifthCat = "Bob" ;

}
function destructivelyRemoveLastCat(Ralph) {
    cats.pop()
}
function destructivelyRemoveFirstCat(Bob) {
    cats.shift()
}
function  appendCat(name) {
 const copyOfCats = [...cats]
 copyOfCats.push (name)
 return copyOfCats

}
function prependCat(name){
    const copyOfCats = [...cats]
    copyOfCats.unshift (name)
    return copyOfCats
}

function removeLastCat(name){
    const copyOfCats = [...cats]
    copyOfCats.pop (name)
    return copyOfCats
}
function removeFirstCat(name){
    const copyOfCats = [...cats]
    copyOfCats.shift (name)
    return copyOfCats
}







