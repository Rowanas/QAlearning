const http = require('http');
const URL = require('url'); // This does fancy URL things. Parses for urls queries and params. Swish.
const fileSystem = require('fs').promises;
const host = 'localhost'; //local loopsback. remember that.
const port = 3000;

const serve = (request, response, file) =>  {
    fileSystem.readFile(__dirname+`/index/${file}`)
    .then(data =>   {
        response.statusCode = 200;
        response.setHeader(`Content-Type`, `text/html`);
        response.end(data);
    })
    .catch(error =>{
        console.error(error.message);
        notFound(request,response);
    })
    }

//makes a notfound function as variable
const notFound = (request, response) => {
    response. statusCode = 404;
    response.setHeader(`Content-Type`, `text/html`);
    response.end(`<h1> Page not Found </h1>`);
}

const notAllowed = (request, response) => {
    response. statusCode = 405;
    response.setHeader(`Content-Type`, `text/html`);
    response.end(`<h1> Method Not Allowed. Try GET instead</h1>`);
}

const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);

//switches on the url path. if there's a / it hands to my index, otherwise, NOTHING.
    if (url.method !== "GET")    {
        notAllowed(request,response);
        return;
//        serve(request, response, notFound) //better method above
    }   else    {
    switch  (url.pathname)  {
    case "/":
        serve(request,response,"index.html");
        break;
    case "/about":
        serve(request,response,"about.html");
        break;
    case "/project":
        serve(request,response,"project.html");
        break;
        default:
            notFound(request, response, notFound);
            break;
    }
    }
}

//creates the server and serves it
const server = http.createServer(requestHandler);
//starts the server with the listen, on the port specified, with the host specified
server.listen(port, host, () => {
    console.log(`Server created on ${host}:${port}`);
});

// response.statusCode = 200;
// // content type header. stiiiiiill not totally sure why required.
// response.setHeader('Content-type', 'text/html');
// // pops this response over, but not sure how interacts with actual kick to index.
// response.end('<h1>My webpage is working</h1>');