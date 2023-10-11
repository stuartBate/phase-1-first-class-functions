//receives a function and calls it

function receivesAFunction(callback){
    callback()
}


//returns a named function
function returnsANamedFunction() {
    return function namedFunction(){
        console.log(`this is named`)
    }
}



// returns an anonymous function
function returnsAnAnonymousFunction(){
    return function(){
        console.log(`this is not named`)
    }

}