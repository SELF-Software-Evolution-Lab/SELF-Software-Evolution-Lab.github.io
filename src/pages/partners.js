import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Partner from "../components/partner"
import Container from "react-bootstrap/Container"
import "./members.css"
import ListGroup from "react-bootstrap/ListGroup";

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        <h1>Industry Partners</h1>
        <ListGroup variant="flush">
          {data.allPartnersJson.edges.map(n => <Partner node={n.node}/>)}
        </ListGroup>
      </Container>
    </Fragment>
  )
}

export const query = graphql`
  query Partners {
  allPartnersJson {
    edges {
      node {
        name
        url
      }
    }
  }
}
  `