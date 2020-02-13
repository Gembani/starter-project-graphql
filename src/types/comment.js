import {GraphQLObjectType, GraphQLString, GraphQLInt} from "graphql";

export default new GraphQLObjectType({
    name: 'Comment',
    fields: () =>  ({
        id: {type: GraphQLString},
        postId: {type: GraphQLInt},
        name: {type: GraphQLString},
        content: {type: GraphQLString}
    })
});
