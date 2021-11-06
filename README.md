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

# TODO

- [ ] Convert the response from /allbooks to a json response (add unit test & jest)
- [ ] Add authentication and endpoint with post
- [ ] Add frontend auth system with react
- [ ] Add dummy pages to navigate and maintain authentication
- [ ] Add requests to Dog Api with Axios
- [ ] Add page to request dog images randomly or by race
- [ ] Save combos of pictures and inserted names onto a new table of the database related to the current user

### To be done in paralell

- [ ] Pick and buy a domain
- [ ] Get the app working remotely (from another pc)
- [ ] Get the app working remotely (from anywhere)

