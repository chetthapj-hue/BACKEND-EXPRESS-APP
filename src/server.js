import express from "express";

const app = express();

//our very first API endpoint!
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
    console.log("Server running no port 3000!");
});

