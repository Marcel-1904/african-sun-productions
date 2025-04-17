import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import "./Blogpost.css"

async function getArticleBySlug(slug) {
  const client = new ApolloClient({
    uri: "https://test1.africansunproductions.com/graphql",
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
      query GetPostByTitle($title: String!) {
        posts(where: { title: $title }) {
          edges {
            node {
              date
              content
              title
            }
          }
        }
      }
    `,
    variables: { title: decodeURIComponent(slug) }, // Decode slug back to title
  });

  return response.data.posts.edges.length > 0 ? response.data.posts.edges[0].node : null;
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getArticleBySlug(slug);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="blog-post-container">
      <h1 className="blog-title">{post.title}</h1>
      <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}