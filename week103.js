//Express function
const user = function getUser(fName,age) {
    return {fName,age}
}
const {fName,age} = user("Mark",25)
console.log(`${fName} ${age}`)