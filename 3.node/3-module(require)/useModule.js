let mod = require('./mod1');
// console.log(mod.a);
// console.log(mod.b);
// mod();

// mod.a();
// mod.b();

let p = new mod('zjh');
p.show();
//总结:

// Node.js的模块系统
// 1.定义模块
//   module    批量导出
//   exports
//   require

//   require：
//   1.如果带有路径——去路径下面找
//   2.如果没有：
//     node_modules文件夹
//     系统node_modules

