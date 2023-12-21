const http= require('http')

const server =http.createServer((request,response)=>{
    if(request.url ==='/'){
        response.end('Welcome to our homepage')
    }
    if(request.url==='/about'){
        response.end('here is our short history')

    }
    response.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find page</p>
    <a href="/">back home</a>
    `)
})
server.listen(5500)