let buffer = new Buffer('ad\r\nsdsd\r\nad2323\r\n23');
let buffer2 = new Buffer('\r\n');
console.log(buffer.indexOf(buffer2));

function bufferSplit(buffer,delimiter){
    let arr = [],n=0
    while((n=buffer.indexOf('\r\n'))!=-1){
        let str = buffer.slice(0,n);
        arr.push(str);
        buffer = buffer.slice(n+delimiter.length);
    }
    arr.push(buffer);
    return arr; 
}
console.info(bufferSplit(buffer,'\r\n').map(b=>b.toString()))
