//单个导出
exports.a = 23;
exports.b = 54;
//批量导出
module.exports = {
    a:23,
    b:99
} 
module.exports = function(){
    console.info('aaa')
}

module.exports = function(){
    console.info('bbb');//覆盖上面
}

module.exports = {
    a(){
        console.info('122')
    },
    b(){
       console.info('433') 
    }
}

module.exports = class Person{
    constructor(name){
        this.name = name;
    }
    show(){
        console.info(this.name)
    }
}
