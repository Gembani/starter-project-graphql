import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLList} from 'graphql';
import {fakeDatabase} from './FakeDatabase';
import post from './types/post'
import author from './types/author'


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
            author: {
                type: author,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args) => fakeDatabase.getAuthor(args.id)
            },
        })
    })
});
