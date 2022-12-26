//return multiple values
function getUser (name,role,age) {
    return [name,role,age] //array
}
const [name,role,age] = getUser ("Mark","CEO Facebook",25)
console.log(name)
console.log(role)
console.log(age)