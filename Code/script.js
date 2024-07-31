// let dev = prompt("enter value");
// switch (dev) {
//   case "1":
//     console.log("1");
//     break;
//   case "2":
//     console.log("enter two number");
//     break;
//   case "3":
//     console.log("enter three value ");
//     break;
//   default:
//     console.log("invalid value");
// }
// let marvals = ["1", "2", "3", "4", "dishant"];
// for (let i = 0; i < marvals.length; i++) {
//   console.log(marvals[i]);
// }

// for (let i of marvals) {
//   console.log(i);
// }
// let marvals = ["1", "2", "3", "4", "dishant"];
// for (let i = 0; i < marvals.length; i++) {
//   console.log(marvals[i]);
// }

// for (let i of marvals) {
//   console.log(i);
// }

// var dev = prompt("enter Your Name");
// switch (dev) {
//   case "1":
//     console.log("One");
//     break;
//   case "2":
//     console.log("Two");
//     break;
//   case "3":
//     console.log("Three");
//     break;
//   case "4":
//     console.log("Four");
//     break;
//   case "5":
//     console.log("five");
//     break;
//   default:
//     console.log("Not One or Three");
// }

// Loop
// let a = 100;
// do {
//   console.log("Hello World" + a + "<br>");
//   a--;
// } while (a > 0);

// function dev() {
//   console.log("dishant sangani");
// }
// function greet(a, b, callback) {
//   console.log(`Value is ${a + b}`);
//   callback();
// }
// greet(5, 7, dev);

// step1 boil water
// step 2 Add Material
// Step 3 Added milk
// Step 4 Drink

// function step1() {
//   const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Boiling Water");
//     }, 3000);
//   });
//   return data;
// }
// function addMaterial() {
//   const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("somtheing went wrong");
//     }, 1000);
//   });
//   return data;
// }
// function addMilk() {
//   const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Added milk");
//     }, 1000);
//   });
//   return data;
// }
// function drink() {
//   const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Drink");
//     }, 3000);
//   });
//   return data;
// }
// async function mydata() {
//   try {
//     const sp1 = await step1();
//     console.log(sp1);
//     const sp2 = await addMaterial();
//     console.log(sp2);
//     const sp3 = await addMilk();
//     console.log(sp3);
//     const sp4 = await drink();
//     console.log(sp4);
//   } catch (error) {
//     console.log(error);
//   }
// }
// step1().then((data)=>{
// console.log(data)
// return addMaterial()
// }).then((data)=>{
//   console.log(data)
//   return addMilk()
// }).then((data)=>{
//   console.log(data)
//   return drink()
// }).then((data)=>{
//   console.log(data)
// })
// mydata();

// Console Technique
// const user = [
//   { id: 1, name: "WDE" },
//   { id: 2, name: "dddddd" }
// ]

// console.table(user)

// InterView Question's
// // let students = ["shubh", "dishant", "shiavani", "dev", "devin", "jarvis"];
// // let house = [];

// // for (const student of students) {
// //   if (student.length < 6) {
// //     house.push("dxcfgfx");
// //   } else if (student.length < 8) {
// //     house.push("hufflepuff");
// //   } else if (student.length < 12) {
// //     house.push("dfghgfghg");
// //   } else {
// //     house.push("guhv hb");
// //   }
// // }
// // console.log(house);
// if (localStorage.getItem("name")) {
//   a = localStorage.getItem("name");
//   document.write("Welcome" + a);
// } else {
//   let a = prompt("Enter Your Name");
//   localStorage.setItem("name", a);
//   document.write("Welcome" + a);
// }
