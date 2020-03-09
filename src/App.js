import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import Success from './components/Success';
import TakeQuiz from './components/TakeQuiz';

function App() {
  return (
    <Router>
    <Header />
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateQuiz} />
      <Route path="/success" component={Success} />
      <Route path="/take/:id" component={TakeQuiz} />
    </Router>
  );
}

export default App;
