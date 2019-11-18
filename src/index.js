import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCounts: '14'},
    {id: 2, message: 'It\'s my first post', likeCounts: '2'},
    {id: 3, message: 'pepegaaaa', likeCounts: '18'},
    {id: 4, message: 'Maks pes', likeCounts: '99'}
]

let dialogs = [
    {id: 1, name: 'MaxPes'},
    {id: 2, name: 'Pavelexus'},
    {id: 3, name: 'Kalem'},
    {id: 4, name: 'Sanek'},
    {id: 5, name: 'Luxur'},
    {id: 6, name: 'BatulinS'},
]

let messages = [
    {id: 1, message: 'Hi.'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'pepegaaaa'},
    {id: 4, message: 'I don\'t know'},
    {id: 5, message: 'YoYo'},
    {id: 6, message: 'psina lohmataya'},
]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
