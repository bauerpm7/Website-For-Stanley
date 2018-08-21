import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import PaddedContainer from '../components/paddedContainer'
import PublicationList from '../components/PublicationList'
import Publication from '../components/Publication'
import Link from "gatsby-link"

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges
  const image = data.allContentfulHome.edges[2].node.coverImage
  const publications = data.allContentfulPublication.edges
  console.log(image)
  return (
    <div>
      <SEO />
      <Container>
        <Hero image = {image}/>
        <PaddedContainer>
          <PageTitle>
            Recent Blog Posts
          </PageTitle>
          <CardList>
            {posts.map(({ node: post }) => (
              <Card
                key={post.id}
                slug={post.slug}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
              />
            ))}
          </CardList>
          <PageTitle>
            Publications
          </PageTitle>
          <PublicationList>
            {publications.map(({ node: publication }) => (
              <Publication
                key = {publication.id} 
                title = {publication.title}
                authors = {publication.authors}
                journal = {publication.journal}
                publicationDate = {publication.publicationDate}
                page = {publication.page}
                volume = {publication.volume}
                url = {`https:${publication.publicationPdf.file.url}`}
                />
            ))}
          </PublicationList>
        </PaddedContainer>
      </Container>
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(
    limit: 3, 
    sort: {fields: [publishDate], order: DESC}
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulHome {
      edges {
        node {
          coverImage {
            id
            sizes {
              aspectRatio
              srcSet
            }
          }
        }
      }
    }
    allContentfulPublication(sort: {fields: [publicationDate], order: DESC}) {
      edges {
        node {
          title
          authors
          journal
          publicationDate(formatString: "YYYY")
          page
          volume
          id
          publicationPdf {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default Index
