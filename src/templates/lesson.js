import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Lesson({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulLesson.title}
        description={data.contentfulLesson.description.description}
      />
      <div className="lesson__details">
        <h2>{data.contentfulLesson.title}</h2>
        <div>{data.contentfulLesson.description.description}</div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query lessonQuery($slug: String!) {
    contentfulLesson(slug: { eq: $slug }) {
      title
      description {
        description
      }
    }
  }
`

export default Lesson
