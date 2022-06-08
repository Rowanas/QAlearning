"use strict";

const http = require("http");
const URL = require("url"); // URL module allows us to parse URLs for their path and query parameters, amongst other things
const fs = require("fs").promises;
const toDo = [];
const host = "localhost"; // 127.0.0.1 is also valid for localhost
const port = 3000;

const notSupported = (request, response) => {
    response.statusCode = 405;
    response.setHeader('Content-type', 'text/html');
    response.end(`<h1>Method ${request.method} not allowed</h1>`);
}

//async in function allows us to use await later, to make this look a bit nicer.
const handleGet = (response) => {
    response.setHeader('Content-type', 'application/JSON');
    //for (let i=0; i<=toDo.length; i++) { //iterate through the elemernts of the toDo JSON string
        response.write(JSON.stringify(toDo));
    response.end();
}

const GetById = (request, response) => {
    const id = request.params.id;
    const findToDo = toDo.find(findToDo => findToDo == id);
    response.write(JSON.parse(toDo[id])); // return the JSON string as a JS object
    }


const handleDelete = (request, response) => {
    response.setHeader('Content-type', 'application/json');
    handleGet();
}

const handlePost = async (request, response) => {
    for await (const seg of request)    {
        response.setHeader('Content-type', 'application/json');
        response.end(JSON.stringify(seg));
        toDo.push(seg);
    }
    handleGet();
}

const handlePut = (request, response) => {
    const url = URL.parse(request.url, true);
    const id = url.query.id;
    response.setHeader('Content-type', 'application/json');
    toDo[id] = JSON.stringify(body);
    handleGet();
}

const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);
    switch (request.method) {
        case "GET":
            handleGet(request, response);
            break;
        case "POST":
            handlePost(request, response);
            break;
        case "PUT":
            handlePut(request, response);
            break;
        case "DELETE":
            handleDelete(request, response);
            break;
        default:
            notSupported(request, response, request.method);
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