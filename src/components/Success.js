import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Success extends Component {
  render() {
    return(
      <Container className="text-center mt-5">
        <h3>Quiz Published!</h3>
        <Link className="btn btn-dark" to="/">Return Home</Link>
      </Container>
    );
  }
}
