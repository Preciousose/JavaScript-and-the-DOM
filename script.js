function printEvenNumbers () {
    let myArray = [];
    for (let i = 1; i<=100; i+=1) {
    
        if (i%2 === 0) {
          myArray.push(i);
        }
    }
    
    return myArray;
        
    }
function returnEvenNumber(x,y){
if(x % 2 == 0) {
   return x;
}
else if(y % 2 == 0){
    return y;
}
else{
    return "Both numbers are odd";
}
}
function firstNumber(x, y) {
    if (Number.isInteger(y / x)) {
      return x + y;
    }
       if (!Number.isInteger(y / x)) {
      return 'Both numbers are NOT integers';
    }
      if (!Number.isInteger(x)) {
          return x + " is not an integer"
      }
          if (!Number.isInteger(y)) {
          return y + " is not an integer"
      }
    return 'Both numbers are NOT integers';
  }

function  printSum(x,y ){
    return x + y;
}

function creatArray(){
let arr = ["Ada", "Jide", "Celestine", "Feranmi", "Funmi", "Zuri", "Mary", "Abidemi", "Emmanuel", "Assane"];
return arr
}

let array = [1,2,4]
array.push(6);

let array1 = [1,2,3,8]
array1.pop();

let array2 = [23.77,80,45]
array2.shift()

let array3 = [[20,30,80],[10,50,55]]
array3.unshift([5, 10, 15]);