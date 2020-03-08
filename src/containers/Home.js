import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <Container>
        <div className="description">
          <h3>Create a personality quiz for free with prsona.</h3>
          <p className="subtext">
          Need to figure out which pokemon you and your friends are?
          Create a quiz quickly and easily with our lightweight quiz creation tool.
          </p>
          <Link className="btn btn-danger" to="/create/quiz">Create</Link>
        </div>
        <hr />
        <div className="description">
          <h3>Not so creative? No worries. Take one of our quizzes below!</h3>
        </div>
      </Container>
    )
  }
}
