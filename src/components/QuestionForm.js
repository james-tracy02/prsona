import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import AnswerForm from './AnswerForm';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    changeQuestion: (index, field, value) =>
      dispatch({ type: 'CHANGE_QUESTION', index, field, value }),
    removeQuestion: (index) =>
      dispatch({ type: 'REMOVE_QUESTION', index }),
    addAnswer: (index) =>
      dispatch({ type: 'ADD_ANSWER', index }),
  };
}

class QuestionForm extends Component {
  render() {
    return(
      <div className="question">
        <h3>Question {this.props.index + 1}.</h3>
        <Form>
          <Form.Group>
            <Form.Control
            className="question-text dark-form form-control"
            type="text"
            placeholder="Question"
            value={this.props.text}
            onChange={(e) => this.props.changeQuestion(this.props.index, 'text', e.target.value)}/>
          </Form.Group>
        </Form>
        {this.props.question.answers.map((answer, i) => {
          return <AnswerForm
          answer={answer}
          questionIndex={this.props.index}
          index={i} />
        })}
        <Button variant="dark" onClick={() => this.props.addAnswer(this.props.index)}>Add Answer</Button>
        <div className="float-right">
          <Button variant="danger" onClick={() => this.props.removeQuestion(this.props.index)}>Remove Question</Button>
        </div>
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(QuestionForm);
