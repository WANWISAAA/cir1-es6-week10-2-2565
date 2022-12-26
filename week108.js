hello = (msg,age) => {
    return {msg,age}
} 

const {msg,age} = hello("Hello World!",25)
console.log(msg)
console.log(age)