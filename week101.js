function hello(msg,name,age) {
    //console.log(`${msg} ${name} ${age}`)
    return {msg,name,age}
}
const result = hello('Hello World!','Mark Zuckerberg', 25)
console.log(` ${result.msg} ${result.name} ${result.age}`)