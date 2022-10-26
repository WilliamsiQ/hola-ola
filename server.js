const fs = require('fs')
const http = require('http');

const server =http.createServer((req,res)=>{
    
        res.writeHead(200,{'Content-Type': 'text/html'});
        if (req.url == '/index.html') {
            const indexReadstream = fs.createReadStream(`${__dirname}/index.html`, 'utf8');
            indexReadstream.pipe(res)
        }

        if(req.url == '/about.html') {
            const aboutReadstream = fs.createReadStream(`${__dirname}/about.html`, 'utf8');
            aboutReadstream.pipe(res)
        }

        if(req.url == '/contact.html') {
            const contactReadstream = fs.createReadStream(`${__dirname}/contact.html`, 'utf8');
            contactReadstream.pipe(res)
        }


        
   
        console.log('file created')
    
})


server.listen(7000, '127.0.0.1');
