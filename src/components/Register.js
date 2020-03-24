import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import userService from '../service/user';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.cpasswordRef = React.createRef();
  }

  tryRegister() {
    if(this.passwordRef.current.value !== this.cpasswordRef.current.value) {
      this.setState({ error: 'Confirm password does not match.' })
    } else {
      userService.createUser({ username: this.usernameRef.current.value, password: this.passwordRef.current.value })
      .then(() => {
        this.setState({ redirect: '/login' });
      });
    }
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container>
        <h3 className="mt-5">Sign Up</h3>
        <Form className="mb-3">
          <Form.Group>
            <Form.Control ref={this.usernameRef} type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control ref={this.passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Control ref={this.cpasswordRef} type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button block variant="danger" onClick={() => this.tryRegister()}>
            Create Account
          </Button>
        </Form>
        <Link to="/register">Already have an account? Click here to log in.</Link>
        {this.state.error ? <Alert variant="danger">{this.state.error}</Alert> : <div />}
      </Container>
    )
  }
}
