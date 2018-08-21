import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 3em 1.5em 2em;
`

const paddedContainer = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default paddedContainer
