import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Blog = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <div>
      <SEO />
      <Container>
        <PageTitle>
          Here's What's on my mind.
        </PageTitle>
        <PageTitle small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget convallis justo. Vivamus feugiat ac sem a venenatis. Sed sed velit ligula. Integer ullamcorper dapibus lacus.</PageTitle>
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
      </Container>
    </div>
  )
}

export const query = graphql`
  query blogQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
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
  }
`

export default Blog

