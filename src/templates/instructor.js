import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import LessonItem from "../components/lesson-item"
import SEO from "../components/seo"

function Instructor({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulInstructor.fullName}
        description={data.contentfulInstructor.bio.bio}
      />
      <div className="md:flex flex-row">
        <img
          className="shadow-md"
          src={data.contentfulInstructor.avatar.file.url}
          alt={data.contentfulInstructor.fullName}
        />

        <div className="px-4 py-4">
          <h2 className="text-4xl my-3">
            {data.contentfulInstructor.fullName}
          </h2>
          <div>{data.contentfulInstructor.bio.bio}</div>
        </div>
      </div>
      {data.contentfulInstructor.lesson && (
        <div className="border-t my-6">
          <h2 className="text-4xl text-grey-dark my-6">Lessons</h2>
          {data.contentfulInstructor.lesson.map(node => (
            <LessonItem lesson={node} key={node.id} />
          ))}
        </div>
      )}
    </Layout>
  )
}
export const query = graphql`
  query instructorQuery($slug: String!) {
    contentfulInstructor(slug: { eq: $slug }) {
      fullName
      avatar {
        file {
          url
        }
      }
      bio {
        bio
      }
      twitter
      website
      lesson {
        id
        title
        slug
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
`
export default Instructor
