function sum(a,b,...args){
    let totel = 0 
    for(const a of args){
       totel = totel + a 
    }
    return {a,b,totel}
}
const {a,b,totel} = sum ('Mark','Zuckerberg',10,20,30,40,50,60)
console.log(`${a} ${b} ${totel}`)