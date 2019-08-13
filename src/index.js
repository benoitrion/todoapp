import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// const taskList = [
//   { id: "t1", title: "Board the plane", completed: false, editing: false },
//   { id: "t2", title: "Sleep", completed: false, editing: false },
//   {
//     id: "t3",
//     title: "Try to finish conference slides",
//     completed: false,
//     editing: false
//   },
//   {
//     id: "t4",
//     title: "Eat cheese and drink wine",
//     completed: false,
//     editing: false
//   },
//   { id: "t5", title: "Go around in Uber", completed: false, editing: false },
//   {
//     id: "t6",
//     title: "Talk with conf attendees",
//     completed: false,
//     editing: false
//   },
//   { id: "t7", title: "Show Demo 1", completed: true, editing: false },
//   { id: "t8", title: "Show Demo 2", completed: false, editing: false },
//   {
//     id: "t9",
//     title: "Lament about the state of animation",
//     completed: false,
//     editing: false
//   },
//   { id: "t10", title: "Show Secret Demo", completed: false, editing: false },
//   { id: "t11", title: "Go home", completed: false, editing: false }
// ];

//  ReactDOM.render(<App taskList={taskList} />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
