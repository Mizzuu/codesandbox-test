/**
 * const, let等の変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// // constは上書きが不可能
// // val3 = "const変数を上書き";

// // constは再宣言が不可能
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Mak",
//   age: "5",
// };
// val4.name = "Kunik";
// val4.address = "VanAqua";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "Mak";
//  const age = 5;
//  // "My name is Mak. I'm 5 years old."

//  // 従来の方法
//  const message1 = "My name is " + name + ". I'm " + age + " years old.";
//  console.log(message1);

//  // テンプレート文字列を用いた方法
//  const message2 = `My name is ${name}. I'm ${age} years old.`
//  console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str) {
//    return str;
//  }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "Mak",
//    age: 5,
//  };

//  const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old.`;
//  console.log(message1);

//  const { name, age } = myProfile;
//  const message2 = `My name is ${name}. I'm ${age} years old.`;
//  console.log(message2);

// const myProfile = ["Mak", 5];

// const message3 = `My name is ${myProfile[0]}. I'm ${myProfile[1]} years old.`;
// console.log(message3);

// const [ name, age] = myProfile;
// const message4 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文  ...
 */

// 配列の展開
//  const arr1 = [1, 2];
// //  console.log(arr1);
// //  console.log(...arr1);

//   const sumFunc = (num1, num2) => console.log(num1 + num2);
//   sumFunc(arr1[0], arr1[1]);
//   sumFunc(...arr1);

//まとめる
//  const arr2 = [1, 2, 3, 4, 5];
//  const [num1, num2, ...arr3] = arr2;
//  console.log(num1);
//  console.log(num2);
//  console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);    // 元の配列の値はそのまま

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);    // 元の配列の値も変わる

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["Mak", "Kunik", "Katmai"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`No. ${ i + 1 } is ${ nameArr[i] }.`);
// }

// const nameArr2 = nameArr.map( (name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map( (name, index) => console.log(`No.${index + 1} is ${name}.`));

// const numArr = [1, 3, 5];
// const newNumArr = numArr.filter( (num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map( (name) => {
//   if (name === "Mak") {
//     return name;
//   } else {
//     return `Queen ${name}`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "Put number.";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "greater than 100" : "less than 100";
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2) {
//    console.log("Either 1 or 2 is true.");
//  }

//  if (flag1 && flag2) {
//   console.log("Both 1 amd 2 are true.");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "Fee hasn't been set."
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "Something has been set.";
// console.log(fee2);
