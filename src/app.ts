import express from "express";
import { Client, Pool } from 'pg';
const app = express();
const port = 3000;


// const client = new Client();
// client.connect().catch((error: any) => {
//   console.log('erro connecting')
//   console.log(error);
// });

let client;


try {
  let pgDbConfig;
  pgDbConfig = {
    host: process.env.PGHOST || '',
    user: process.env.PGUSER || '',
    password: process.env.PGPASSWORD || '',
    port: Number(process.env.PGPORT) || 8080,
    database: process.env.PGDATABASE || '',
  };
  console.log(pgDbConfig);

  const pgPool = new Pool(pgDbConfig);

  // the pool will emit an error on behalf of any idle clients it contains if a backend error or network partition happens
  pgPool.on('error', (err, client) => {
    console.error('Unexpected error on idle pg client', err, client);
  });

  // pgPool.connect((err, client, release) => {
  //   if (err) {
  //     return console.error('Error acquiring client', err.stack)
  //   }
  //   client.query('SELECT NOW()', (err, result) => {
  //     release()
  //     if (err) {
  //       return console.error('Error executing query', err.stack)
  //     }
  //     console.log(result.rows)
  //   })
  // })
  // trying to use error listener after the connect
  pgPool.on('connect', () => {
    pgPool.on('error', err => console.log(err));
  });

  // pgPool.query('SELECT NOW()', (err, res) => {
  //   console.log(err, res)
  //   pgPool.end()
  // })

  pgPool.query('SELECT * FROM books', (err, res) => {
    console.log(res.rows);
    pgPool.end();
  })
  console.log('API is ready');
  // client = connectToPool(pgPool);

} catch(exception) {
  console.error('API is not ready');
  process.exit(1);
}

const query = `
SELECT * FROM books;
`;

/* client.query(query, (err: any, res: any) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log(res.rows);
  client.end();
}); */


app.get('/', (req: any, res: any) => {
  res.send('Hello World!\n');
  console.log("Grelos");
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})