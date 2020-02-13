import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList} from "graphql";
import author from './author';
import comment from './comment';
import {fakeDatabase} from "../FakeDatabase";

export default new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        author: {
            type: author,
            resolve: () => fakeDatabase.getAuthor(author.id)
        },
        comments: {
            type: new GraphQLList(comment),
            resolve: () => fakeDatabase.getCommentsForPost(this.id)
        }
    })
});
