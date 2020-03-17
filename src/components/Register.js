import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function mapDispatchToProps(dispatch) {
  return {
    register: (username, password) =>
      dispatch({ register: 'LOGIN', username, password})
  };
}

class Register extends Component {
  render() {
    return (
      <Container>
        <h3 className="mt-5">Sign Up</h3>
        <Form className="mb-3">
          <Form.Group>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button block variant="danger">
            Create Account
          </Button>
        </Form>
        <Link to="/register">Already have an account? Click here to log in.</Link>
      </Container>
    )
  }
}


export default connect(() => ({}), mapDispatchToProps)(Register);
