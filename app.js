const express = require('express');
const app  = express();
const port = 3000;


app.get('/', (req, res) => {
    res.status(200).send('Hello express js');
})


app.listen(port, () => {
    console.log(`server start running on port: ${port}`);
})