
let json1='{"name":"madhu","age":28}';
let json2='{"age":28,"name":"seshu"}';
function compareJSON(json1,json2){
    let obj1=JSON.parse(json1);
    let obj2=JSON.parse(json2);
    if(Object.keys(obj1).length !==Object.keys(obj2).length){
        return false
    }
    for (let key in obj1){
        if(!obj2.hasOwnProperty(key)||obj1[key]!==obj2[key]){
            return false;
        }
    }
    for(key in obj2){
        if(!obj1.hasOwnProperty(key)||obj2[key]!==obj1[key]){
            return false;
        }
    }
    return true;
}
let result=compareJSON(json1,json2);
console.log(result);
