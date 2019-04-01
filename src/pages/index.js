import React from "react"
import { Link, graphql } from "gatsby"

import LessonItem from "../components/lesson-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Short, instructional screencast video tutorials for web developers on @eggheadio"
      description="Concise screencast video tutorials that cover the best tools, libraries, and frameworks that modern javascript web developers can use to code more effectively and stay current."
    />
    <div className="lessons">
      {data.allContentfulLesson.edges.map(({ node }) => (
        <LessonItem lesson={node} key={node.id} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  {
    allContentfulLesson {
      edges {
        node {
          title
          slug
          id
          image {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`
