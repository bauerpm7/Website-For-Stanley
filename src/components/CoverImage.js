import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroImage = styled.img`
  max-height: 600px;
  width: auto;
`

const CoverImage = () => {
  return (
    <div>
      <HeroImage src="https://source.unsplash.com/random" alt="Random Image"/>
    </div>
  )
}

export default CoverImage