import React from "react";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <main>
      <h1>Welcome to the homepage</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.frontmatter.slug}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
