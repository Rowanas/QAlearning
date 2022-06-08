"use strict"

const http = require('http');
const URL = require('url'); // URL module allows us to parse URLs for their path and query parameters, amongst other things

const host = 'localhost'; // 127.0.0.1 is also valid for localhost
const port = 3000;

const home = (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Hello world</h1>');
}

const notFound = (request, response) => {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Page not found</h1>');
}

const info = (request, response) => {
    //parses the url for the country key/value pair
    const url = URL.parse(request.url, true)
    const country = url.query.country;
    const city = url.query.city;
    //sends response status code
    response.statusCode = 200;
    response.write(`<p> The country you queried was ${country}, and the city you queried was ${city}</p>`)
    //you can end above, in this example. Most other times you'll want to handle the data someway before ending, making this useful.
    response.end();
}

    // Exercise:
    // - Extend this example to accept a city and return this city in the response
    //   Example: Request sent = /info?country=England&city=Manchester
    //            Response     = The country is England and the city is Manchester


const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);
    
    switch (url.pathname) {
        case "/":
            home(request, response);
            break;
        case "/info":
            info(request, response);
            break;
        default:
            notFound(request, response);
            break;
    }
}

// create the server and assign it a request handler
// - the request handler is a callback function which accepts two parameters, request and response
const server = http.createServer(requestHandler);

// start the server
// - call the listen() method on the server object
server.listen(port, host, () => {
    // the code in here runs once the server has started
    console.log(`Server up on ${host}:${port}`);
});