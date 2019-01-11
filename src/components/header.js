import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import gatsbyLogo from '../images/gatsby-icon.png'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #bada55;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '100px',
            }}
            src={gatsbyLogo}
            alt="Gatsby Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
