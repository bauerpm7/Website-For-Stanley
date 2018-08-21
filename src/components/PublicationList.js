import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto 50px;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const PublicationList = props => {
  return <List>{props.children}</List>
}

export default PublicationList
