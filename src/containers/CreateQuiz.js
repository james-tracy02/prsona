import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class CreateQuiz extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey, false);
  }

  handleKey(e) {
    if(e.key === 'Enter') e.preventDefault();
  }

  render() {
    return (
      <Container>
        <div className="create-quiz">
          <div className="quiz-tool">
            <h3>Step 1. Create Quiz</h3>
            <p>Think of a good name and description for your quiz.</p>
            <hr />
            <Form>
              <Form.Group>
                <Form.Control className="form-control quiz-title" type="text" placeholder="Quiz Title" />
              </Form.Group>
              <Form.Group>
                <Form.Control className="form-control" type="text" placeholder="Image url (optional)" />
              </Form.Group>
              <Form.Group>
                <Form.Control className="form-control" as="textarea" rows="3" placeholder="Description..." />
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="create-quiz">
          <div className="quiz-tool">
            <h3>Step 2. Add Results</h3>
            <p>Define the results to your quiz.</p>
            <hr />
            <div className="result">
              <Form>
                <Form.Group>
                  <Form.Control className="minor-title dark-form form-control" type="text" placeholder="Result" />
                </Form.Group>
                <Form.Group>
                  <Form.Control className="dark-form form-control" type="text" placeholder="Image url (optional)" />
                </Form.Group>
                <Form.Group>
                  <Form.Control className="dark-form form-control" as="textarea" rows="3" placeholder="Description..." />
                </Form.Group>
              </Form>
            </div>
            <Button variant="danger">+ Result</Button>
          </div>
        </div>

        <div className="create-quiz">
          <div className="quiz-tool">
            <h3>Step 3. Add Questions</h3>
            <p>Create questions for your quiz.</p>
            <hr />
            <div className="question">
              <h3>Question 1.</h3>
              <Form>
                <Form.Group>
                  <Form.Control className="question-text dark-form form-control" type="text" placeholder="Question" />
                </Form.Group>
              </Form>
              <div className="answer">
                <h4>Answer 1.</h4>
                <Form>
                  <Form.Group>
                    <Form.Control className="answer-text dark-form form-control" type="text" placeholder="Answer" />
                  </Form.Group>
                </Form>
                <div className="weight">
                <Form inline>
                  <Form.Group>
                    <Form.Label className="points-label">Add</Form.Label>
                    <Form.Control className="points-input dark-form form-control" type="number" placeholder="1" />
                    <Form.Label className="points-label">point to</Form.Label>
                    <Form.Control className="points-input dark-form form-control" as="select">
                      <option>None</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
                </div>
                <Button variant="danger" size="sm">+ Score</Button>
              </div>
              <div className="answer">
                <h4>Answer 2.</h4>
                <Form>
                  <Form.Group>
                    <Form.Control className="answer-text dark-form form-control" type="text" placeholder="Answer" />
                  </Form.Group>
                </Form>
              </div>
              <div className="mr-60px">
                <Button variant="danger">+ Answer</Button>
              </div>
            </div>

            <Button variant="danger">+ Question</Button>
          </div>
        </div>

        <div className="create-quiz">
          <div className="quiz-tool">
            <h3>Step 4. Publish Quiz</h3>
            <p>Take a moment to review your quiz, and then click the publish button below to submit.</p>
            <hr />
            <Button variant="danger">Publish Quiz!</Button>
          </div>
        </div>
      </Container>
    )
  }
}
