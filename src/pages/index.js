import React from "react";
import { graphql } from "gatsby";

function mapEdgesToNodes(data) {
  if (!data?.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export const query = graphql`
  query IndexPageQuery {
    blogPosts: allSanityBlogPost {
      edges {
        node {
          id
          blogTitle
          blogContent
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data } = props;

  const blogPosts =
    data?.blogPosts || {} ? mapEdgesToNodes(data.blogPosts) : [];

  return (
    <>
      <header className="header py-6 px-6 bg-slate-800 white text-slate-50">
        <h1 className="font-extrabold">Solo coding</h1>
        <h2 className="mb-3 ">a record of a journey</h2>
      </header>
      <main className="main p-6 max-w-7xl mx-auto">
        {blogPosts.map((blogPost, index) => (
          <div key={index}>
            <h3 className="mb-3 font-bold">{blogPost.blogTitle}</h3>
            <p className="mb-2">{blogPost.blogContent}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
