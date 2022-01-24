const http=require('http')
const server=http.createServer((req,res)=>{
if (req.url==='/'){
    res.end('Welcome to our home page')
}
if (req.url==='/about'){
    res.end('You are in our about page')
}
res.end(`
<h1>Oops</h1>
<p>Sorry we can't find the page</p>
<a href='/'>Back Home</a>
`)
})
server.listen(5000)