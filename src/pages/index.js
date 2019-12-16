import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"
import Image from "react-bootstrap/Image";

export default ({ data }) => (
  <Fragment>
    <Header/>
    <Container>
      <h1>SELF (Software Evolution Laboratory For Applied Research)</h1>
      <p>{data.info.edges[0].node.description}</p>
      {data.files.edges.find(e => e.node.childImageSharp.fluid.originalName === data.info.edges[0].node.image) ?
        <Img
          fluid={data.files.edges.find(e => e.node.childImageSharp.fluid.originalName === data.info.edges[0].node.image).node.childImageSharp.fluid}
             imgStyle={{
               objectFit: "contain",
               objectPosition: "50% 50%",
             }}
        /> : <Image src="https://via.placeholder.com/1300x500" fluid/>
      }
    </Container>
  </Fragment>
)

export const query = graphql`
  query Index {
  info: allDataJson {
    edges {
      node {
        description
        image
      }
    }
  }
  
  files: allFile(filter: {sourceInstanceName: {eq: "img"}}) {
    edges {
      node {
        childImageSharp {
          fluid (maxWidth: 1200){
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
}
  `;