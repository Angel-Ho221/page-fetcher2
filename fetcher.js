// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)


const request = require ('request');
const fs = require ('fs');

request(process.argv[2], (err, res, body) => {
  console.log("Error: ", err);
  console.log('StatusCode: ', res && res.statusCode)


fs.writeFile(process.argv[3], body, function (err) {
  let bytesSize = body.length;

  if (err) return console.log(err);
  console.log(`Downloaded and saved ${bytesSize} bytes to ${process.argv[3]}`)
  })
});
