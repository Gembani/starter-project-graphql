import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLList} from 'graphql';
import {fakeDatabase} from './FakeDatabase';
import post from './models/post'
import author from './models/author'

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
                resolve: (parent, args) => {
                    const post = fakeDatabase.getBlogPost(args.id);
                    post.comments = fakeDatabase.getCommentsForPost(args.id);
                    return post
                }
            },
            author: {
                type: author,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args) => {
                    let author = fakeDatabase.getAuthor(args.id);
                    author.posts = fakeDatabase.getPostsOfAuthor(args.id);

                    return author
                }
            },
        })
    })
});
