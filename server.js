const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const UserSchema = require('./schema/UserSchema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: UserSchema,
    graphiql: true,
  })
);

app.listen(5050, () => {
  console.log('listening');
});
