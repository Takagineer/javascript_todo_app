// var vall = "var変数";
// console.log(vall);

// //vvar変数は上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//アロー関数
// function func1(str){
//   return str;
// }

// const func1 = function(str){
//   return str;
// }

// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str)=>{
//   return str;
// }
// console.log(func2("func2です"));

//注意点
// 引数の省略、単一式のみで返す
// const func2 = (str) =>  str;
// console.log(func2("func2です"));

// const func3= (num1,num2)=> num1 + num2;

// console.log(func3(10,20));

//分割代入
// const myProfile = {
//   name:"田中",
//   age:10,
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列の分割代入
// const myProfile = ["田中",10];

// const [name,age] = myProfile;
// const message = `名前は${name}です。年齢は${age}歳です。`;

//default値,初期値
// const sayHello = (name = "名無し") =>console.log(`こんにちは!${name}さん！`);
// sayHello("たなか");

//ススプレッド構文
//配列の展開。配列の中身を順番に示してくれる。
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2)=>console.log(num1 + num2);
// // sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる。展開の逆
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使用した配列の処理
//従来のやり方。繰り返し処理
// const nameArr = ["山田","田中","花子"];
// // for(let index = 0; index < nameArr.length;index ++){
// //   console.log(nameArr[index]);
// // }

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })

// // console.log(nameArr2);
// //mapは配列から新しい配列を作り出す
// // nameArr.map((name)=>console.log(name));

// //filterは条件に一致したもののみでは配列を作る。

// // const numArr = [1,2,3,4,5]
// // const newNumArr = numArr.filter((num)=>{
// //   return num % 2 ===1;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name === "花子"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//三項演算子。可読性に注意しながら使用すること
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0? 'trueです':'falseです'
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number'? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲外です';
// }
// console.log(checkSum(50,60));

//論理演算子の本当の意味
// 又はの記号は、左側がfalseの時に右側を返すという意味。
//&&は左側がtrueなら右側を返す。
