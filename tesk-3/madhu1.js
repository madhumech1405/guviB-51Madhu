
let XLMHttpRequest=require('xhr2');

let xhr=new XLMHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
let users=JSON.parse(xhr.responseText);
let userNames=[];
let countryName=[];
for(let  user of users){
    userNames.push(user['population']);
    countryName.push(user['name'])
    console.log(userNames);
    console.log(countryName)

}
};
xhr.send();
