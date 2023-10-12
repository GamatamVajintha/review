console.log("hi===========")

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home web page');
    } else if (req.url === '/about') {
        res.end('Welcome to our about page');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We could not find the page you're looking for.</p>
            <a href="/">Back to home</a>
        `);
    }
});
server.listen(5000);


