import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  count: 0,
  username: '',
  password: '',
  quiz: '',
  score: 0,
  baseURL : "https://fierce-headland-96292.herokuapp.com/users/",
  scores: {
    "tango7-1" : 0,
    "def7-1" : 0,
    "tango8-1" : 0,
    "def8-1" : 0,
    "tango8-2" : 0,
    "def8-2" : 0,
    "tango9-1" : 0,
    "def9-1" : 0,
    "tango9-2" : 0,
    "def9-2" : 0,
    "tango10-1" : 0,
    "def10-1" : 0,
    "tango10-2" : 0,
    "def10-2" : 0,
  },
  login: false
});

export const countUp = () => {
  setGlobalState('count', (v) => v + 1);
};

export const countDown = () => {
  setGlobalState('count', (v) => v - 1);
};

export const setLogin = (log) => {
  setGlobalState('login',  log);
};

export const setName = (username) => {
  setGlobalState('username',  username );
};

export const setQuiz = (quiz) => {
  setGlobalState('quiz',  quiz );
};

export const setPass = (password) => {
  setGlobalState('password',  password );
};

export const setScore = (score) => {
  setGlobalState('score', score);
};

export const setScores = (scores) => {
  setGlobalState('scores', scores);
};

export const setURL = (url) => {
  setGlobalState('baseURL', url);
};



export { useGlobalState };