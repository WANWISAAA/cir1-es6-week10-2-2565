//function
function greet(name,callback){
    console.log(name)
    callback()
}

function callme(){
    console.log('I am callback function')
}

greet ('pater',callme)