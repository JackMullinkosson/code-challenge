const findSum = function(array) {
    return array.reduce(function(a, b){
        return a + b;
    }, 0);
  };
  

  const findFrequency = function(array) {
      var object = {};
   let mostFrequent = array[0], maxCount = 0;
   let length = array.length;
   for (let i = 0; i < length; i++) {
       let count = 0;
       for (let j = i+1; j < length; j++){
           if(array[i] === array[j]){
               count++;
           }
       }
       if(maxCount<count){
           maxCount = count;
           mostFrequent = array[i];
       }
       object['most']=mostFrequent;
       object['least']='b';
       
   }
   return object;
  };

  
  const isPalindrome = function(str) {
      str = str.toLowerCase();
      var strBackwards = str.split('').reverse().join();
      str = str.split('').join();
      if (str === strBackwards){
          return true;
      }
          else { 
              return false;
      }
  };

    
  const largestPair = function(array) {
      var products = [];
    for (i=0;i<array.length-1;i++){
       var prod = (array[i]*array[i+1])
       products.push(prod);
    }
   return Math.max(...products);
  };
  
  const removeParenth = function(str) {
      for (let i = 0; i < str.length; i++) {
          if (str[i].includes('(')){ 
          var open = i;
          }
          if (str[i].includes(')')){
              var close = i+1;
          }
      }
      var difference = close-open;
    str = str.split('')
    str.splice(open, difference);
    return str.join().replace(/,/g,'');
  };
  
  const scoreScrabble = function(str) {
      var score = 0;
      var one = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
      var two = ['d', 'g']
      var three = ['b', 'c', 'm', 'p']
      var four = ['f', 'h', 'v', 'w', 'y']
      var five = ['k']
      var eight = ['j','x']
      var ten = ['q','z']
   for (let i = 0; i < str.length; i++) {
      if(one.includes(str[i])){
          score += 1; 
      }
      if(two.includes(str[i])){
        score += 2; 
    }
    if(three.includes(str[i])){
        score += 3; 
    }
    if(four.includes(str[i])){
        score += 4; 
    }
    if(five.includes(str[i])){
        score += 5; 
    }
    if(eight.includes(str[i])){
        score += 8; 
    }
    if(ten.includes(str[i])){
        score += 10; 
    }
   }
   return score;
  };
