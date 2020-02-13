import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import post from './post';

export default new GraphQLObjectType({
    name: 'Author',
    fields: () =>  ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        posts: { type: new GraphQLList(post) }
    })
});
