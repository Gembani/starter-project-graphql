import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList} from "graphql";
import author from './author';
import comment from './comment';

export default new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        author: {type: author},
        comments: {type: new GraphQLList(comment)}
    })
});
