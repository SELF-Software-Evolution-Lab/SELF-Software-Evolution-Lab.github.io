import React, { Fragment } from "react";
import { graphql } from "gatsby";
import "./personal.css";
import Header from "../components/header";
import Container from "react-bootstrap/Container";
import Img from "gatsby-image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default ({ data }) => (
  <Fragment>
    <Header/>
    <Container className="mt-3">
      <Row>
        <Col md={9} xs={12}>
          <h1>Kelly Garcés</h1>
          <p className="text-muted">{data.allMembersJson.edges[0].node.title}</p>
        </Col>
        <Col md={3} xs={12}>
          <Img className="rounded-circle prof-img"
               fluid={data.files.edges.find(e => e.node.childImageSharp.fluid.originalName === data.allMembersJson.edges[0].node.image).node.childImageSharp.fluid}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={3} xs={12}>
          <h3>Biography</h3>
        </Col>
        <Col md={9} xs={12}>
          {data.allMembersJson.edges[0].node.biography}
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={3} xs={12}>
          <h3>Projects</h3>
        </Col>
        <Col md={9} xs={12}>
          <a className="outlink" target="_blank" href="/active_projects">Go to Ongoing Projects</a>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={3} xs={12}>
          <h3>Teaching</h3>
        </Col>
        <Col md={9} xs={12}>
          {data.allMembersJson.edges[0].node.courses.map(c => <Fragment>
              <a className="outlink"
                 target="_blank"
                 href={data.courses.edges.find(n => n.node.id === c).node.url}>{data.courses.edges.find(n => n.node.id === c).node.name}
              </a>
              <br/>
            </Fragment>
          )}
          <br/>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export const query = graphql`
  query Kelly {
  allMembersJson(filter: {id: {eq: "kj.garces971"}}) {
    edges {
      node {
        name
        biography
        title
        image
        courses
      }
    }
  }
  
  courses: allCoursesJson {
    edges {
      node {
        id
        name
        url
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