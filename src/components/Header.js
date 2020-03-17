import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <Container fluid className="header">
          <Link to="/" className="brand" style={{ textDecoration: 'none' }}>prsona</Link>
          <Link to="/login" className="btn btn-danger float-right mt-3">Log In</Link>
      </Container>
    )
  }
}
