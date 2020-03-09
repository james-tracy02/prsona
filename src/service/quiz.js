
import axios from 'axios';
const url = 'https://prsona-api.herokuapp.com';

function publishQuiz(quiz) {
  return axios.post(`${url}/quizzes`, quiz);
}

function getAllQuizzes() {
  return axios.get(`${url}/quizzes`);
}

function getQuiz(id) {
  return axios.get(`${url}/quizzes/${id}`);
}

export default {
  publishQuiz,
  getAllQuizzes,
  getQuiz,
};
