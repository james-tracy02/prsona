import React, { Component } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import quizService from '../service/quiz';

export default class TakeQuiz extends Component {
  constructor() {
    super();
    this.state = {
      quiz: null,
      question: -1,
      points: {}
    }
  }

  componentDidMount() {
    quizService.getQuiz(this.props.match.params.id)
    .then((res) => this.setState({ quiz: res.data }));
  }

  nextQuestion() {
    this.setState((state) => ({ question: state.question + 1}));
  }

  recordAnswer(index) {
    const points = this.state.points;
    const answer = this.state.quiz.questions[this.state.question].answers[index];
    answer.weights.forEach((weight) => {
      if(points[weight.categoryIndex]) {
        points[weight.categoryIndex] += weight.weight;
      } else {
        points[weight.categoryIndex] = weight.weight;
      }
    });
    this.setState({ points });
  }

  calculateResults() {
    const results = this.state.quiz.categories.sort((a, b) => {
      return (this.state.points[b.categoryIndex]|| 0) - (this.state.points[a.categoryIndex] || 0);
    });
    return results;
  }

  render() {
    if(!this.state.quiz)
      return <div></div>;

    if(this.state.question === -1) {
      return (
        <Container>
          <div className="description">
          <div style={{'max-width': '40%'}} className="text-center center-block">
            <Image src={this.state.quiz.resourceURL} fluid/>
          </div>
            <h1>{this.state.quiz.name}</h1>
            <h4 className="subtext text-center mt-3">
            Author: {this.state.quiz.author}
            </h4>
          </div>
          <hr />
          <div className="text-center">
            <Button variant="dark" onClick={() => this.nextQuestion()}>Start Quiz</Button>
          </div>
        </Container>
      )
    }

    if(this.state.question >= this.state.quiz.questions.length) {
      const results = this.calculateResults();
      if(results.length > 0) {
        return (
          <Container className="text-center">
            <div className="description">
            <div style={{'max-width': '40%'}} className="text-center center-block">
              <Image src={results[0].resourceURL} fluid/>
            </div>
              <h1>{results[0].name}</h1>
              <hr />
              <p className="subtext text-center mt-3">
                {results[0].description}
              </p>
            </div>
            <h3>Other results:</h3>
            {results.slice(1).map((result, i) => {
              return (
                <div>
                  <h4>#{i + 2} - {result.name}</h4>
                </div>
              );
            })}
            <hr />
            <Link className="btn btn-dark mb-3" to="/">Home</Link>
          </Container>
        )
      } else {
        return (
          <Container className="text-center">
            <div className="description">
              <h1>No Results</h1>
            </div>
            <Link className="btn btn-dark" to="/">Return</Link>
          </Container>
        )
      }
    }

    return (
      <Container className="text-center">
        <h2 className="mt-5">
          Question {this.state.question + 1}. {this.state.quiz.questions[this.state.question].text}
        </h2>
        <hr />
        {this.state.quiz.questions[this.state.question].answers.map((answer, i) => {
          return <button
          variant="light"
          size="lg"
          className="answer-btn"
          onClick={() => {
            this.recordAnswer(i)
            this.nextQuestion()
          }}>
          {answer.text}
          </button>
        })}
      </Container>
    )
  }
}
