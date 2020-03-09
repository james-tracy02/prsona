
import produce from 'immer';

const initialState = {
  quiz: {
    name: '',
    author: '',
    resourceURL: '',
    description: '',
    questions: [],
    categories: [],
  },
};

let globalIndex = 0;

export default function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case 'CHANGE_QUIZ':
      return produce(state, draft => {
        draft.quiz[action.field] = action.value;
      });

    case 'ADD_RESULT':
      const result = {
        name: '',
        resourceURL: '',
        description: '',
        categoryIndex: globalIndex++,
      };
      return produce(state, draft => {
        draft.quiz.categories.push(result);
      });

    case 'CHANGE_RESULT':
      return produce(state, draft => {
        draft.quiz.categories[action.index][action.field] = action.value;
      });

    case 'REMOVE_RESULT':
      return produce(state, draft => {
        draft.quiz.categories.splice(action.index, 1);
      });

    case 'ADD_QUESTION':
      const question = {
        text: '',
        resourceURL: '',
        type: 'SingleAnswer',
        answers: [],
      }
      return produce(state, draft => {
        draft.quiz.questions.push(question);
      });

    case 'CHANGE_QUESTION':
      return produce(state, draft => {
        draft.quiz.questions[action.index][action.field] = action.value;
      });

    case 'REMOVE_QUESTION':
      return produce(state, draft => {
        draft.quiz.questions.splice(action.index, 1);
      });

    case 'ADD_ANSWER':
      const answer = {
        text: '',
        weights: [],
      };
      return produce(state, draft => {
        draft.quiz.questions[action.index].answers.push(answer);
      });

    case 'CHANGE_ANSWER':
      return produce(state, draft => {
        draft.quiz.questions[action.questionIndex]
          .answers[action.index][action.field] = action.value;
      });

    case 'REMOVE_ANSWER':
      return produce(state, draft => {
        draft.quiz.questions[action.questionIndex]
          .answers.splice(action.index, 1);
      });

    case 'ADD_WEIGHT':
      const weight = {
        weight: 0,
        categoryIndex: -1,
      };
      return produce(state, draft => {
        draft.quiz.questions[action.questionIndex]
          .answers[action.index].weights.push(weight);
      });

    case 'CHANGE_WEIGHT':
      return produce(state, draft => {
        draft.quiz.questions[action.questionIndex]
          .answers[action.answerIndex]
            .weights[action.index][action.field] = action.value;
      });

    case 'REMOVE_WEIGHT':
      return produce(state, draft => {
        draft.quiz.questions[action.questionIndex]
          .answers[action.answerIndex]
            .weights.splice(action.index, 1);
      });

    default:
      return state;
  }
  return state;
}
