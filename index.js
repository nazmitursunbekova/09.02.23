function name0function(num1,num2){
console.log(num1+num2)

name0function(5,5);
name0function(10,10);
}

function is (num){
  if (num % 2===0){
    console.log("Even");
  }
  else if (num % 2 ===1){
    console.log("odd");
    
  }
  else{
    console.log("not a number")
  }
}

let countdown = 5
while(countdown <= 10 ){
  console.log(countdown);
  countdown++
}


function countup(a,b){
  for (let i=a;i<=b;i++){
    console.log(i);
  }
}
 function count (a,b){
  if (a < b){
    countup(a,b);
  }
 
 else {
  countdown(a,b);
 }
}

let names = ["Aidai","Bakyt","Joldosh"];
console.log(names)

let example1 = names.pop();
console.log(names)
let example2 = names.shift();
console.log(names);



for (let i = 0; i > names.lenght; i++) {
  console.log(names[i]);
}
let names1 = ["Aidai", "Bakyt", "Joldosh"]
for (let i = names1.length - 1; i >= 0; i--){
  console.log(names1[i]);
}

let names2 = ["Aidai", "Bakyt", "Joldosh"]
for (let i = 0; i < names2.length; i++){
  console.log(names[i] + ' - '+ names2[i].length)
}
let names3 = ["Aidai","Bakyt","Joldosh"];
let result =0;
for (let i = 0; i < names.length; i++){
  result = result + names[i].length;
}
console.log(result.length);