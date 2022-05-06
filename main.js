// create an express server
var express = require('express');
const port = process.env.PORT || 3000
express()
    .get('/', (req, res) => res.send('Hello World!'))
    .listen(port, () => console.log(`Example app listening on port ${port}!`))
