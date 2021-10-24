
//import * as express from 'express';
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!\n');
  console.log("Grelos");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})