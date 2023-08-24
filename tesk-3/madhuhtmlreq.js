
let XLMHttpRequest=require('xhr2');

let xhr=new XLMHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
let users=JSON.parse(xhr.responseText);
let userNames=[];
let userreg=[];
for(let  user of users){
    userNames.push(user['subregion']);
    userreg.push(user['region']);
    console.log(userNames);
console.log(userreg)
}
};
xhr.send();



