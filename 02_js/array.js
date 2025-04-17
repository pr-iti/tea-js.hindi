//Array
// const myarr=[0,1,2,3,2,5];
// const heroes=["priti","rani","nikhil"];

// console.log(myarr[1]);

// const arr2=myarr;
// const arr3=new Array(0,3,4,5);//another way to declare array
// console.log(arr3[3]);

// arr2.push(6);// to add values

// arr2.push(3);
// console.log(arr2);
 
// arr2.pop();//delete the last element
// console.log(arr2);

// arr2.unshift(3);//add the values  given in the parenthesis at the start of the array

// console.log(arr2);
// arr2.shift();//removes the added value;

// //3 is present or not...result in bool
// console.log(arr2.indexof(3));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);
// The shift() method returns the value that was "shifted out":


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log(fruit);

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let h=fruits.unshift("Lemon");
// console.log(fruits);
// console.log(h);

// array methods

// let arr1=["priti","kumari"," singh"];
// let arr2=["anus","ray","bacchan"];

//join array ->>
// arr1.push(arr2);// not a good practice
// console.log(arr1[3][1]);//acess the internal array ele.

// console.log(arr1);//display array

// const newarr= arr1.concat(arr2);// concate take multiple argument

// console.log(newarr);
//spread operator
// const an_newarr=[...arr1,...arr1];
// console.log(an_newarr);

//slice ,---splice
// var arr=[1,2,3,4,5];
// var arrnew=[6,7,8,9,0];

// console.log("a", "slice mhd", arr.slice(1,3));//no change in org. array
// console.log(arr);
// console.log("a", "splice mhd", arr.splice(1,3));//removes the splice elements fo org. array
// console.log(arr);

//flatten a array
// var nwrarr=[1,2,3,4,[4,5,5,[45,[56]]],4];
// var cngarr=nwrarr.flat(2);
// console.log(cngarr);