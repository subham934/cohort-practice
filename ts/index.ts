// const a: string = "Subham";
// const b: number = 23;

// console.log(a,b);

// const car: string =  "BMW";
// let age:number = 32;
// let isAdmin:boolean = false;

// console.log(car,age,isAdmin);

// console.log("Hello from Typescript");

// const ar: number[] = [10,23, 11, 73];
// console.log(ar)

// const arr: number[] = [23, 90, 89, 71];
// console.log(arr)

// const arr: number[] = [1,2,3];
// console.log(arr);

// const arr: string[] = ["harry", "subham", "ritik", "megan"];
// console.log(arr)

// const arr: Array<number> = [1,2,3,4,5];
// console.log(arr);

// const arr: Array<string> = ["harry", "subham", "ritik", "megan"];
// console.log(arr)

// const arr: Array<boolean> = [true,false,true,false,true];
// console.log(arr);

// const arr: boolean[] = [true,false,true,false,true]
// console.log(arr)

// const arr: string[] = ["harry", "subham", "ritik", "megan"]
// console.log(arr)

// const arr1: Array<string> = ["harry", "subham", "ritik", "megan"]
// console.log(arr1)

// const arr: any[] = [1,"ronny", true, 32.231]
// console.log(arr)

// const arr: Array<any> = [1,"ronny", true, 32.231]
// console.log(arr)

// const arr: Array<Array<string>> = [["a", "b"], ["c", "d"]]
// console.log(arr)

// const arr: [string,number,boolean] = ["harry", 23, true]
// console.log(arr)

// const arr: number[][] = [[1,2],[3,4]]
// console.log(arr)

// const arr: [number, string, boolean, number] = [1,"harry", true, 32.231]
// console.log(arr)

// const arr: number[] = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)

// const arr: Array<number> = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)

// const arr: [number, number] = [1,2];
// console.log(arr)

// let arr : Array<Array<Array<number>>> = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]]
// console.log(arr)
// console.log(arr[0][1][0])

// const arr: number[] = [23, 18, 83, 62];
// arr.push(53);
// console.log(arr)
// we cannot push string, boolean, number in this array as it is defined as number array
// arr.push("subham") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//===========================================================
// Tuples
//===========================================================

// let arr:[number, number, number] = [1,2,3]
// console.log(arr)
// arr.push(43);
// // console.log(arr[3])
// console.log(arr)

// const a: [number, string, number] = [1,"2", 4]
// a.push(5)
// console.log(a[3])
// console.log(a);

//===========================================================
// Void
//===========================================================

// function greet(name: string){
//     console.log("Hello " + name)
// }

// greet("subham")

//Non-void
// function greetFirstName(name: string){
//     return name.split(" ")[0]
// }
// console.log(greetFirstName("subham"))
//===========================================================
// function add(a: number, b: number):string {
//     return a + b
// }

// console.log(add(1,2))

// this will show error as we are actually returning number but as per function definition we are returning string
//  Type 'number' is not assignable to type 'string'.
// ---------------------------------
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(1, 2));

//===========================================================

// function greet(name:string):void{
//     console.log("Hello,", name)
// }
// greet("cohort")

//===========================================================

// function greet(name:string){
//     throw new Error("Something went wrong!");
// }
// greet("cohort")

// function greet(name: string): never{
//   throw new Error('Something went wrong!');
// }
// greet('cohort');

//===========================================================

// const user = {
//   name: 'BMW',
//   bike: 'R1300GS',
//   price: 2100000,
//   isElectric: false,
//   color: 'black',
// };

// function fullDetail(data: {name: string, bike: string, price: number, isElectric: boolean, color: string}){
//     console.log(`The bike of ${data.name} is ${data.bike} and its price is ${data.price}`)
// }

// fullDetail(user);

// type user = {
//     name: string,
//     age: number,
//     isMale: boolean
// }

// const dataUser: user = {
//     name: "Hayabusa",
//     age: 2021,
//     isMale: true,
// }

// function greet(data: user){
//     console.log("Hello " + data.name + " your age is " + data.age)
// }

// greet(dataUser);

// const user = {
//     name: "Subham",
//     age: 32,
//     isMale: true,
// }

// function greet(data: {name: string, age: number, isMale: boolean}){
//     console.log("Hello " + data.name + " your age is " + data.age)
// }

// greet({
//     name: "Subham",
//     age: 32,
//     isMale: true,
// })

// type USER = {
//     name: string,
//     age: number,
//     isMale: boolean
// }

// function greet(data: USER){
//     console.log(`Hello ${data.name} your age is ${data.age} and you are ${data.isMale ? "Male" : "Female"}`)
// }

// greet({
//     name: "Subham",
//     age: 32,
//     isMale: true,
// })

// function greet(data: { name: string; age: number; isMale: boolean }) {
//   console.log(
//     'hello ' +
//       data.name +
//       ' your age is ' +
//       data.age +
//       ' and you are ' +
//       data.isMale
//   );
// }

// greet({
//   name: 'Subham',
//   age: 32,
//   isMale: true,
// });


// type CAR = {
//     name: string,
//     price: number,
//     isElectric: boolean
// }

// function fullDetail(data: CAR){
//     console.log(`The bike of ${data.name} is ${data.price} and it is ${data.isElectric ? "Electric" : "Non-Electric"}`)
// }

// fullDetail({
//     name: "BMW",
//     price: 2100000,
//     isElectric: false,
// })


// let a: any;
// a="Rana devatunga"
// console.log(a.toUpperCase())

// a = 123;
// console.log(a)


// let b:unknown
// b = "Hello Typescript";

// if(typeof b === "string"){
//     console.log(b.toUpperCase())
// }else{
//     console.log("b is not a string")
// }

// function greet(data: unknown){
//     if(typeof data === "number"){
//         console.log(data)
//     }else{
//         console.log("data is not a string")
//     }
// }

// greet(23532)


// let nam:string = "Ankur";
// let age:number  = 32;
// let isActive:boolean = true;

// console.log(nam, age, isActive)

// let skills: string[] = ["HTML", "CSS", "Javascript", "React", "Node", "MongoDB"]
// console.log(skills)

// let scores: Array<number> = [23, 34, 342, 323, 122]
// console.log(scores)


// let point: [number, number] = [23, 29]
// let user : [string, number] = ["Subham", 34]
// console.log(point)
// console.log(user)

// let data: any 
// data = "Ankur"
// console.log(data)

// data = 32
// console.log(data)

// data = true
// console.log(data)


// let danger: any = "Hello";
// danger.toUpperCase();
// // danger.nonExistentMethod();
// console.log(danger)


// let safe: unknown = "impalla homogenica";

// if(typeof safe === "string"){
//     console.log(safe.toUpperCase())
// }else{
//     console.log("safe is not a string")
// }



// function logMessage(msg: string): void{
//     console.log(msg);
// }
// logMessage("Hello Typescript")

// function crash(error: string): never{
//     throw new Error(error);
// }

// crash("Something went wrong!")


// function add(a:number , b:number):number{
//     return a + b
// }
// console.log(add(1,2))


