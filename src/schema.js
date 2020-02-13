import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLList} from 'graphql';
import {fakeDatabase} from './FakeDatabase';


const post = new GraphQLObjectType({
    name: 'posts',
    fields: () => ({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        author: {type: author}
    }),
    resolve: () => fakeDatabase.getBlogPosts()
});

const author = new GraphQLObjectType({
    name: 'Author',
    fields: () =>  ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString}
    })
});



export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            posts: {
                type: new GraphQLList(post),
                resolve: () => fakeDatabase.getBlogPosts()
            },
            post: {
                type: post,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (parent, args) => fakeDatabase.getBlogPost(args.id)
            },

        })
    })
});
