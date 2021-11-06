import express from "express";
import { Client, Pool } from 'pg';
const app = express();
const port = 3000;

const clientConfig = {
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'teresalves',
  password: process.env.PGPASSWORD || 'example',
  port: Number(process.env.PGPORT) || 3300,
  database: process.env.PGDATABASE || 'jorgedb',
};

console.log(clientConfig)
const client = new Client(clientConfig);
client.connect().catch((error: any) => {
  console.log('erro connecting')
  console.log(error);
});


app.get('/', (req: any, res: any) => {
  res.send('Hey there \n');
})

app.get('/allbooks', async (req: any, res: any) => {
  const result = await client.query('SELECT * FROM books');
  res.send(result.rows);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

