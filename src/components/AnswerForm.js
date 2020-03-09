import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import WeightForm from './WeightForm';
import { connect } from 'react-redux';

function mapStateToDispatch(dispatch) {
  return {
    changeAnswer: (field, value, questionIndex, index) =>
      dispatch({ type: 'CHANGE_ANSWER', field, value, questionIndex, index }),
    removeAnswer: (questionIndex, index) =>
      dispatch({ type: 'REMOVE_ANSWER', questionIndex, index }),
    addWeight: (questionIndex, index) =>
      dispatch({ type: 'ADD_WEIGHT', questionIndex, index }),
  };
}

class AnswerForm extends Component {
  render() {
    return(
      <div className="answer">
        <h4>Answer</h4>
        <Form>
          <Form.Group>
            <Form.Control
            className="answer-text dark-form form-control"
            type="text"
            placeholder="Answer"
            value={this.props.answer.text}
            onChange={(e) => this.props.changeAnswer('text', e.target.value, this.props.questionIndex, this.props.index)} />
          </Form.Group>
        </Form>
        {this.props.answer.weights.map((weight, i) =>
          <WeightForm
            weight={weight}
            questionIndex={this.props.questionIndex}
            answerIndex={this.props.index}
            index={i} />
        )}
        <Button
        variant="dark"
        size="sm"
        onClick={() => this.props.addWeight(this.props.questionIndex, this.props.index)}>
        Add Score</Button>
        <div className="float-right">
          <Button
          variant="danger"
          size="sm"
          onClick={() => this.props.removeAnswer(this.props.questionIndex, this.props.index)}>
          Remove Answer</Button>
        </div>
      </div>
    )
  }
}

export default connect(() => ({}), mapStateToDispatch)(AnswerForm);
