import React from 'react'
import styled from 'styled-components'


const Article = styled.li`
  margin: 0 0 1em 0;
  line-height: 24px;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
`

const Publication = props => {
  return(
    <Article>{props.authors} {props.title} {props.journal} {props.volume}, {props.page} ({props.publicationDate}).  <a target = '_blank' href={props.url}>View article</a>
    </Article>
  )
}
export default Publication
