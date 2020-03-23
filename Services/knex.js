var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'https://us-east-2.console.aws.amazon.com/rds/home?region=us-east-2#dbinstances:id=aaov4aqivdqjgh',
    user : 'vijay',
    password : 'Farming002*',
    database : 'aaov4aqivdqjgh'
  }
});