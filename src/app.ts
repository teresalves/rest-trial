import express from "express";
const { Client } = require('pg');
const app = express();
const port = 3000;


const client = new Client();
client.connect().catch((error: any) => {
  console.log('erro connecting')
});

const query = `
SELECT * FROM books;
`;

client.query(query, (err: any, res: any) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log(res.rows);
  client.end();
});


app.get('/', (req: any, res: any) => {
  res.send('Hello World!\n');
  console.log("Grelos");
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})