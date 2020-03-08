import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <Container fluid className="header">
          <Link to="/" style={{ textDecoration: 'none' }}><div className="brand">prsona</div></Link>
      </Container>
    )
  }
}
