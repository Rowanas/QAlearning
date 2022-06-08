const express = require('express');
const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));

const server = app.listen(port, () => {
    console.log(`Server up on ${server.address().address}:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get("/scream", (req, res) => {
    res.sendFile(`./screaming monkey.jpg`);
});

app.get("/new", (req, res) => {
    res.sendFile(`./styles.css`);
});