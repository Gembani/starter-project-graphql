import app  from '../src/app'
import request from 'supertest'

describe('GET /', () => {
  let response;
  test('verify send many posts has authors', async () =>{
    const query_string = `{
      posts{
        title,
        author {
            name  
        }
      }
    }`;
    response  = await  request(app).post('/graphql').send({ query:  query_string});
    expect(response.body.data.posts[0].title).toBe("My first blog post");
    console.log(response.body)
  });


  test('verify single post', async () =>{
    const query_string = `{
       post(id: 1) {
         id
         content
       } 
    }`;
    response  = await  request(app).post('/graphql').send({ query:  query_string});
    expect(response.body.data.post.id).toBe(1);
  });


  test('verify send get posts of authors', async () =>{
    const query_string = `{
     author(id: "88d6bec2") {
       name
         posts {
           id 
           title
           content
         }
       }
    }`;
    response  = await  request(app).post('/graphql').send({ query:  query_string});
    expect(response.body.data.author.posts).toBeGreaterThan(0);
    console.log(response.body)
  });

});