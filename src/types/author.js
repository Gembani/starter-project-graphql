import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import post from './post';
import {fakeDatabase} from "../FakeDatabase";

export default new GraphQLObjectType({
    name: 'Author',
    fields: () =>  ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        posts: {
            type: new GraphQLList(post),
            resolve: () => fakeDatabase.getPostsOfAuthor(this.id)
        }
    })
});
