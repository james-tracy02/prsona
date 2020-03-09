import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    changeResult: (index, field, value) =>
      dispatch({ type: 'CHANGE_RESULT', index, field, value }),
    removeResult: (index) =>
      dispatch({ type: 'REMOVE_RESULT', index }),
  };
}

class ResultForm extends Component {
  render() {
    return (
      <div className="result">
        <Form>
          <Form.Group>
            <Form.Control
            className="minor-title dark-form form-control"
            type="text"
            placeholder="Result"
            value={this.props.result.name}
            onChange={(e) => this.props.changeResult(this.props.index, 'name', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control
            className="dark-form form-control"
            type="text"
            placeholder="Image url (optional)"
            value={this.props.result.resourceURL}
            onChange={(e) => this.props.changeResult(this.props.index, 'resourceURL', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control
            className="dark-form form-control"
            as="textarea"
            rows="3"
            placeholder="Description..."
            value={this.props.result.description}
            onChange={(e) => this.props.changeResult(this.props.index, 'description', e.target.value)} />
          </Form.Group>
        </Form>
        <div className="text-right">
          <Button variant="danger" onClick={() => this.props.removeResult(this.props.index)}>Remove Result</Button>
        </div>
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(ResultForm);
