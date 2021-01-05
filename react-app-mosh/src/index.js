import React from 'react';
import ReactDOM from 'react-dom';
import { Teacher } from './Teacher';


const element = <h1>hello world</h1>;
ReactDOM.render(element, document.getElementById('root'));





const teacher = new Teacher('mat', 'k');
console.log(teacher);