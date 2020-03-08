import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import CreateQuiz from './containers/CreateQuiz';

function App() {
  return (
    <Router>
    <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/create/quiz" component={CreateQuiz} />
    </Router>
  );
}

export default App;
