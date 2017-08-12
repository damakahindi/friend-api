const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const port = 3000

app.listen(port, function () {
    console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ ', port, port);
})