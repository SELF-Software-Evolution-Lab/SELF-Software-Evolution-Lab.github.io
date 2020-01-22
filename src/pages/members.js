import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Member from "../components/member";
import MemberNoImage from "../components/memberNoImage";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import "./members.css";
import ListGroup from "react-bootstrap/ListGroup";

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        <h1>Professors from the Systems and Computing Engineering Department (Uniandes)</h1>
        <CardDeck>
          {data.allMembersJson.edges.map(n => {
            if (n.node.category === "discProfessor")
              return <Member key={n.node.name} node={n.node}/>;
            return "";
          })}
        </CardDeck>
        {data.allMembersJson.edges.find(n => n.node.category === "professor") ?
          <Fragment>
            <h1>Other professors</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "professor")
                  return <MemberNoImage key={n.node.name} node={n.node}/>;
                return "";
              })}
            </ListGroup>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "postdoc") ?
          <Fragment>
            <h1>Post doc</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "postdoc")
                  return <MemberNoImage key={n.node.name} node={n.node}/>;
                return "";
              })}
            </ListGroup>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "phd") ?
          <Fragment>
            <h1>PHD Candidates</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "phd")
                  return <MemberNoImage key={n.node.name} node={n.node}/>;
                return "";
              })}
            </ListGroup>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "msc") ?
          <Fragment>
            <h1>Master's Degree Candidates</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "msc")
                  return <MemberNoImage key={n.node.name} node={n.node}/>;
                return "";
              })}
            </ListGroup>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "bsc") ?
          <Fragment>
            <h1>Bachelor's Degree Candidates</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "bsc")
                  return <MemberNoImage key={n.node.name} node={n.node}/>;
                return "";
              })}
            </ListGroup>
          </Fragment> : ""}
      </Container>
    </Fragment>
  );
}

export const query = graphql`
  query Names {
  allMembersJson(filter: {status: {eq: "active"}}) {
    edges {
      node {
        name
        subCategory
        category
        url
        status
        image
      }
    }
  }
}
  `;