import { gql } from 'graphql';

export const typeDef = gql`
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
`;
