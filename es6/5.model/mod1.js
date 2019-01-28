// 1.export 连着定义带输出方式
// // export let a = 9;
// // export const b = 22;
// let a = 22;
// let b = 33;
// export function sum(){
//     alert(a+b)
// }

// export class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         alert(this.name)
//     }
// };

//2.定义完再输出
// let a = 3;
// let b = 6;
// let sum = function(){
//     alert(a+b)
// }
// let Person = class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         alert(this.name)
//     }
// }

// export {a,b,sum,Person}

//3.默认导出
export default 23;
//另外的:导入别的模块
import d from './mod2'
alert(d)