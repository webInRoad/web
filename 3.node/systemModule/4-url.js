const url = require('url');
let str = 'http://www.bing.com:8080/a/b/1.html?a=1&b=2&c=3';
console.log(url.parse(str,true))