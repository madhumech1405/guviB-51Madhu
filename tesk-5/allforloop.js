let jsonObjest={
    "car":"BMw","number":"tn30bu0691","city":"salem","model":"2022",
    "insurance":"valid","extent warrenty":"2500000"
}
//using a for in loop
for(let key in jsonObjest){
    console.log(key+":"+jsonObjest[key]);
}
//for of loop
let entries =Object.entries(jsonObjest);
for(let [key,value]of entries){
    console.log(key+":"+value);
}
Object.entries(jsonObjest).forEach(([key,value]) => {
    console.log(key+":"+value)
});