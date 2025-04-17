import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import "./Blogpage.css";

// ✅ Fetching posts inside a Server Component
async function getArticles() {
  const client = new ApolloClient({
    uri: "https://test1.africansunproductions.com/graphql",
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
      query NewQuery {
        posts {
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
  });

  return response.data.posts.edges.map(({ node }) => node);
}

// ✅ Function to extract the first 30 words and strip HTML
function getExcerpt(htmlContent, wordLimit = 30) {
  // Remove HTML tags using regex
  const text = htmlContent.replace(/<[^>]+>/g, ""); 

  // Limit the text to the first `wordLimit` words
  const words = text.split(/\s+/).slice(0, wordLimit).join(" "); 

  return words + "..."; // Add ellipsis at the end
}

export default async function BlogPage() {
  const posts = await getArticles(); // ⬅️ Fetch posts before rendering

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Our Blog</h1>
      <div className="blog-list">
        {posts.map((post, index) => {
          const encodedTitle = encodeURIComponent(post.title); // Encode title for URL
          return (
            <div key={index} className="blog-card">
              <h2>{post.title}</h2>
              <p>{getExcerpt(post.content)}</p>
              <Link href={`/blog/${encodedTitle}`}>Read More →</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
