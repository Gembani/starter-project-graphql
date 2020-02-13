// import schema from './schema';
import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: `{
    type Post {
        id: Int
        title: String
        content: String
        author: Author
    }
    
    type Author {
        id: String
        name: String
        email: String
    }
    
    type Comment {
        id: Int
        post: Post 
        name: String
        content: String
    }
}`,
  graphiql: true
}));

export default app;
