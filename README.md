# How to run

## One of two ways

### Fist one

- `docker-compose up` 

### Second one

- `docker-compose up mydb`
- `yarn dev`

You can also simply run `yarn dev` but it will not have any connection to the database.

# Testing

- `curl localhost:3000` - gets you a simple hello world
- `curl localhost:3000/allbooks` - gets you all books in the database