import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.secondary};
  width: 100%;
  padding: 1.5em 0;
  position: fixed;
  z-index: 99;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: DarkGrey;
    }
  }
`

const activeLinkStyle = {
  borderBottom: '2px solid black'
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="#top" exact activeStyle={activeLinkStyle}>
              Stanley Doe
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
