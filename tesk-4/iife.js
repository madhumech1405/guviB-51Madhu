//print odd num
(function(array){
    for(let num of array){
        if(num%2!==0){
            console.log(num);
            
        
        }
    }
})([1,2,4,3]);

//Convert all the strings to title caps in a string array

(function (arr) {
    let titleCaps = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCaps);
  })(["hello", "world", "javascript"]);

  
  //Sum of all numbers in an array
(function (arr) {
    let sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
  })([1, 2, 3, 4, 5]);
  
  
  //Return all the prime numbers in an array
  (function (arr) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let primeNums = arr.filter((num) => isPrime(num));
    console.log(primeNums);
  })([1, 2, 3, 4, 5, 9, 10]);


  ( function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()

  

  
  //DUPlicat array

  (function () {
    
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    
    console.log(duplicates);
  })()
  
  //K TIME
  
  (function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)