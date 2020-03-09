import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QuizCard from './QuizCard';
import quizService from '../service/quiz';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
    };
  }

  componentDidMount() {
    quizService.getAllQuizzes()
    .then((res) => this.setState({ quizzes: res.data }));
  }

  render() {
    return (
      <Container>
        <div className="description">
          <h3>Create a personality quiz in minutes with prsona.</h3>
          <Link className="btn btn-dark" to="/create">Create</Link>
        </div>
        <hr />
        <div className="description">
          <h3>Not so creative? No worries. Take one of the quizzes below!</h3>
          <Row>
          {this.state.quizzes.map((quiz) => {
            return (
              <Col xs={4}>
                <QuizCard quiz={quiz} />
              </Col>
            );
          })}
          </Row>
        </div>
      </Container>
    )
  }
}
