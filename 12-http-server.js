const http = require('http')

// const server = http.createServer((req,res)=>{
//   res.write('Welcome to our home page')
//   res.end()

// })
const server = http.createServer((req, res)=>{
  if(req.url==='/'){
    res.end('Welcome to our home page')
  }
  if(req.url ==='/about'){
    res.write('Here is a short history')
  }
  // You will find the below in the 'localhost:5000/error' page in browser
  res.end(`<h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/"> back home </a>
    `)
})
server.listen(5000)