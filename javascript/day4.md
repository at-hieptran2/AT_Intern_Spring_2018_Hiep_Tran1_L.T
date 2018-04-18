// Knowledge round-up 
1.
- null as a null value or does not value does not exist.
- undefined is a variable declared but not assigned a value.

2.
- 'use strict' is a command that is declared to handle the underlying code that is more stringent in terms of   syntax.
- Advantages: It helps to manage the more stringent code, faster error detection.
- Disadvantage: some features can not be used anymore.

3.
- The operator "==" operator: compares equals and returns true if their values match without having the same data type.
  ex: var a = "5";
      var b = 5;
      This value will return true because the two values match.


- The operator "===": Compare the values that are equal and compare the data type of the variable. If both conditions are not satisfied, the result is false.
  ex: var a = "5";
      var b = 5;
      This value will return false because two values are not the same type.

4.
var:
  - can declare,
  - If not declared then its default value is undefined.
  - Creates a variable whose scope is accessed throughout the containing funtion,

let:
  - can not re-declare,
  - If not declared, it will be error,
  - can change the value,
  - Creates a variable that is only accessible in the block surrounding it,

const:
  - can not re-declare,
  - If not declared, it will be error,
  - can not change the value,



// Playground
1.
```javascript
function sumintegers(a,b) {
  if (a==b) {
    return 3*(a+b);
  }else {
    return a + b;
  }
}
```

2.
```javascript
function absolutenum (j) {
  if (j > 19) {
    return 3*(j -19);
  }else {
    return 19 - j;
  }
}
```

3.
```javascript
function exercise3(num) {
  let arr = [];
  let numInt = "";
  for(let i = 0; i <= 9; i++) 
  {
    numInt =  num.replace("*", i);
    if(numInt%3 === 0) {
      arr.push(numInt);
    }
  }
  return(arr);
}
exercise3('1*9');
```
