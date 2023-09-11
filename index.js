// console.log("hey kana");
// console.log("hey kana");
// const abc = require("./index2")

// abc(50,30)

const http = require("http");
// const cors = require("cors");


const jsonobject = [
  {
    "What is NodeJS" : "Nodejs is Single Threaded Non Blocking Oparations"
  }
]

const app = http.createServer((request, response) => {
  if (request.url === "/about") {
    // response.write("hello nodejssvdeg");
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>What is NodeJS?</h1>");
    response.write("<p>Nodejs is Single Threaded Non Blocking Oparations</p>");

    response.write("</body>");

    response.write("</html>");
    response.end();
  } else if(request.url === "/json"){
    response.write("hello nodejs");
    const data = JSON.stringify(jsonobject);
    response.write(data)

    response.end();
  }
  else{
    response.write("hello nodejs home");
    response.end()

  }
});

// app.use(cors(
//   {
//     // origin:"http://localhost:3001"
//     origin:"*"
//   }
// ))
app.listen(5401);
