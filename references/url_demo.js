const url = require('url');

const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialize URL

console.log(myurl.toString());

//Host
console.log(myurl.host);

// Hostname 
console.log(myurl.hostname);

console.log(myurl.pathname)

console.log(myurl.search);

console.log(myurl.searchParams);

myurl.searchParams.append('abc','123');

console.log(myurl.searchParams)

myurl.searchParams.forEach((value,name)=> console.log(`${name}:${value}`));