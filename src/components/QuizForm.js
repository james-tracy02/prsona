import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    quiz: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeQuiz: (field, value) =>
      dispatch(({ type: 'CHANGE_QUIZ', field, value })),
  };
}

class QuizForm extends Component {
  render() {
    return (
      <div className="quiz">
        <Form>
          <Form.Group>
            <Form.Control
            className="form-control quiz-title"
            type="text"
            placeholder="Quiz Title"
            value={this.props.quiz.name}
            onChange={(e) => this.props.changeQuiz('name', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control
            className="form-control"
            type="text"
            placeholder="Author"
            value={this.props.quiz.author}
            onChange={(e) => this.props.changeQuiz('author', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control
            className="form-control"
            type="text"
            placeholder="Image url (optional)"
            value={this.props.quiz.resourceURL}
            onChange={(e) => this.props.changeQuiz('resourceURL', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control
            className="form-control"
            as="textarea"
            rows="3"
            placeholder="Description..."
            value={this.props.quiz.description}
            onChange={(e) => this.props.changeQuiz('description', e.target.value)} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
