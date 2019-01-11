import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #bada55;
  }
  a:hover {
    color: purple;
  }
`
const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
