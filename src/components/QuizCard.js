import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class QuizCard extends Component {
  render() {
    return (
      <Card>    
        <Card.Img variant="top" src={this.props.quiz.resourceURL || 'holder.png' }  />
        <Card.Body>
          <Card.Title>{this.props.quiz.name}</Card.Title>
          <Card.Text>
            {this.props.quiz.description}
          </Card.Text>
          <footer className="blockquote-footer mb-3">
            {this.props.quiz.author}
          </footer>
          <Link className="btn btn-dark" to={`/take/${this.props.quiz.id}`}>Take Quiz!</Link>
        </Card.Body>
      </Card>
    )
  }
}
