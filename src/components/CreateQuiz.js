import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import QuizForm from '../components/QuizForm';
import ResultForm from '../components/ResultForm';
import QuestionForm from '../components/QuestionForm';
import { connect } from 'react-redux';
import quizService from '../service/quiz';

function mapStateToProps(state) {
  return { quiz: state.quiz }
}

function mapDispatchToProps(dispatch) {
  return {
    addResult: () =>
      dispatch({ type: 'ADD_RESULT' }),
    addQuestion: () =>
      dispatch({ type: 'ADD_QUESTION' }),
  };
}

class CreateQuiz extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey, false);
  }

  handleKey(e) {
    if(e.key === 'Enter') e.preventDefault();
  }

  validateQuiz(quiz) {
    return;
  }

  publishQuiz() {
    const err = this.validateQuiz(this.props.quiz);
    if(!err) {
      if(this.props.quiz.id) {
        quizService.updateQuiz(this.props.quiz.id, this.props.quiz)
        .then(() => this.setState({ redirect: '/success' }));
      } else {
        quizService.publishQuiz(this.props.quiz)
        .then(() => this.setState({ redirect: '/success' }));
      }
    }
  }

  render() {
    if(this.state.redirect)
      return <Redirect to={this.state.redirect} />;

    return (
      <Container className="mt-4">
        <div className="quiz-tool">
          <h3>Step 1. Create Quiz</h3>
          <p>Think of a good name and description for your quiz.</p>
          <hr />
          <QuizForm />
        </div>

        <div className="quiz-tool">
          <h3>Step 2. Add Results</h3>
          <p>Define the results to your quiz.</p>
          <hr />
          {this.props.quiz.categories.map((result, i) => {
            return <ResultForm result={this.props.quiz.categories[i]} index={i} />
          })}
          <Button variant="dark" onClick={this.props.addResult}>Add Result</Button>
        </div>

        <div className="quiz-tool">
          <h3>Step 3. Add Questions</h3>
          <p>Create questions for your quiz.</p>
          <hr />
          {this.props.quiz.questions.map((question, i) => {
            return <QuestionForm question={question} index={i} />
          })}
          <Button variant="dark" onClick={this.props.addQuestion}>Add Question</Button>
        </div>

        <div className="quiz-tool">
          <h3>Step 4. Review and Publish Quiz</h3>
          <p>Take a moment to review this quiz, and then click the publish button below to submit.</p>
          <hr />
          <Button variant="danger" onClick={() => this.publishQuiz()}>Publish</Button>
        </div>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);
