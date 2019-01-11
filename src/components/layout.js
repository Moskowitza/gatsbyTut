import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Archive from './archive'
import Header from './header'
import './layout.css'
import styled from 'styled-components'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainLayout>
          <div>{children}</div>
          <Archive />
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.five12c.com">Gatsby</a>
          </footer>
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
