import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import userService from '../service/user';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  login() {
    userService.login(this.usernameRef.current.value, this.passwordRef.current.value)
    .then((token) => {
      console.log(token);
      if(token.data) {
        this.setState({ redirect: '/' });
      } else {
        this.setState({ error: 'Incorrect username or password.' });
      }
    });
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container>
        <h3 className="mt-5">Login</h3>
        <Form className="mb-3">
          <Form.Group>
            <Form.Control ref={this.usernameRef} type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control ref={this.passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Button block variant="danger" onClick={() => this.login()}>
            Log In
          </Button>
        </Form>
        <Link to="/register">Don't have an account? Click here to sign up.</Link>
        {this.state.error ? <Alert variant="danger">{this.state.error}</Alert> : <div />}
      </Container>
    )
  }
}
