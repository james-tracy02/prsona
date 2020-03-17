import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) =>
      dispatch({ type: 'LOGIN', username, password})
  };
}

class Login extends Component {
  render() {
    return (
      <Container>
        <h3 className="mt-5">Login</h3>
        <Form className="mb-3">
          <Form.Group>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button block variant="danger">
            Log In
          </Button>
        </Form>
        <Link to="/register">Don't have an account? Click here to sign up.</Link>
      </Container>
    )
  }
}


export default connect(() => ({}), mapDispatchToProps)(Login);
