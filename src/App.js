import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import Success from './components/Success';
import TakeQuiz from './components/TakeQuiz';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateQuiz} />
      <Route path="/success" component={Success} />
      <Route path="/take/:id" component={TakeQuiz} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
