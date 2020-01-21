import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default (props) => (
  <ListGroupItem>
    <a href={props.node.url} target="_blank" rel="noopener noreferrer"><h6>{props.node.name}</h6></a>
  </ListGroupItem>
)