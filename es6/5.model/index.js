//1.*代表引入所有，as mod表示起个别名为mod
// import * as mod from './mod1';
// console.info(mod)
// // console.info(mod.a)
// // console.info(mod.b);
// // mod.b = 23;
// // console.info(mod.b); //23 不是说const的不能改吗？这边为啥输出了23

// mod.sum();

// var p = new mod.Person('zjh');
// p.showName();

//2.按需引入 {a,sum}
// import {a,sum} from './mod1';
// alert(a);
// sum();

//3.默认导入 import a from './mod1'; import名字随意起
import a from './mod1';
alert(a)

//4.模块的代码引入进来，不引入内部成员
// import "./1.jpg";
// import "./1.css";

//5.异步引入
// let promise=import("./mod1");
/*
import("./mod2").then(mod2=>{
  alert('mod2的qq:'+mod2.qq);
}, err=>{
  alert('mod2加载失败');
});
*/
