import schema from './schema';
import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

export default app;
