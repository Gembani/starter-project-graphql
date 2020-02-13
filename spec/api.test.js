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

  test('verify send get posts of authors', async () =>{
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

  test('verify send get posts of authors', async () =>{
    const query_string = `{
       post(id: 1) {
         id
         content
       } 
    }`;
    response  = await  request(app).post('/graphql').send({ query:  query_string});
    expect(response.body.data.posts[0].id).toBe(1);
    console.log(response.body)
  });



});
