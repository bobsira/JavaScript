var buffer = new Buffer('Hello World','utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);

buffer.write('wollo');
console.log(buffer.toString());



