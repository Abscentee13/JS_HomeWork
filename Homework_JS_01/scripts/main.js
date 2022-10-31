
let str1='hello';
let str2='owu';
let str3='com';
let str4='ua';
let int1=1;
let int2=10;
let int3=-999;
let int4=123;
let float1=3.14;
let float2=2.7;
let float3=16;
let bool1=true;
let bool2=false;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(int1);
console.log(int2);
console.log(int3);
console.log(int4);
console.log(float1);
console.log(float2);
console.log(float3);
console.log(bool1);
console.log(bool2);

alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(int1);
alert(int2);
alert(int3);
alert(int4);
alert(float1);
alert(float2);
alert(float3);
alert(bool1);
alert(bool2);

document.write(str1+"<br>");
document.write(str2+"<br>");
document.write(str3+"<br>");
document.write(str4+"<br>");
document.write(int1.toString()+"<br>");
document.write(int2.toString()+"<br>");
document.write(int3.toString()+"<br>");
document.write(int4.toString()+"<br>");
document.write(float1.toString()+"<br>");
document.write(float2.toString()+"<br>");
document.write(float3.toString()+"<br>");
document.write(bool1.toString()+"<br>");
document.write(bool2.toString()+"<br>");

let firstName = 'Лінчук';
let middleName = 'Наталія';
let lastName = 'Леонідівна';
let fullName = firstName+' '+ middleName + ' '+ lastName+"<br>";
document.write(fullName);
document.write(`${firstName} ${middleName} ${lastName}`);

let a = 100; let b = '100'; let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

firstName = window.prompt('Name');
lastName = window.prompt('Lastname');
age = parseInt(window.prompt('Age'));
console.log(firstName);
console.log(lastName);
console.log(age);