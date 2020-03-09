import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    categories: state.quiz.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeWeight: (field, value, questionIndex, answerIndex, index) =>
      dispatch({ type: 'CHANGE_WEIGHT', field, value, questionIndex, answerIndex, index }),
    removeWeight: (questionIndex, answerIndex, index) =>
      dispatch({ type: 'REMOVE_WEIGHT', questionIndex, answerIndex, index}),
  };
}

class WeightForm extends Component {
  render() {
    return (
      <div className="weight">
        <Form inline>
          <Form.Group>
            <Form.Label className="points-label">Add</Form.Label>
            <Form.Control
            className="points-input dark-form form-control"
            type="number"
            placeholder="0"
            value={this.props.weight.weight}
            onChange={(e) => this.props.changeWeight('weight',
              e.target.value,
              this.props.questionIndex,
              this.props.answerIndex,
              this.props.index)}/>
            <Form.Label className="points-label">point to</Form.Label>
            <Form.Control className="points-input dark-form form-control"
                          as="select"
                          value={this.props.weight.categoryIndex}
                          onChange={(e) => this.props.changeWeight('categoryIndex',
                            e.target.value,
                            this.props.questionIndex,
                            this.props.answerIndex,
                            this.props.index)}>
              <option value={-1}>None</option>
              {this.props.categories.map((category, i) =>
                <option value={category.categoryIndex}>{category.name || 'Result'}</option>
              )}
            </Form.Control>
          </Form.Group>
          <Button className="ml-3" variant="danger" size="sm" onClick={() => this.props.removeWeight(
            this.props.questionIndex,
            this.props.answerIndex,
            this.props.index)}>
            Remove Score</Button>
        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightForm);
