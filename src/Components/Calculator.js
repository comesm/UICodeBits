import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './Calculator.css';

export default class Calculator extends Component {

constructor() {
  super();

  this.state = {
      displayNumbers: '0.0',
      clicked: null,
      calculate: [],
      result: 0,
      processing: null
  }
}

handleClick(e) {
  const id = e.target.id;
  this.updateDisplayNumbers(id);
}

compute() {
  return this.calculate();
  //this.setState({displayNumbers: answer, calculate: []});  
}

updateDisplayNumbers(input) {
  
  let newState = {...this.state};
  let val = parseFloat(input, 10) || input;   
  //if(typeof val === 'string') {
    if(val === 'C') {
      newState.calculate = [];
      newState.displayNumbers = '0.0';
    } else {
      if(val === '=') {
        let answer = this.compute();   
        newState.displayNumbers = answer;
      } else {
        newState.displayNumbers = val;
      } 
    
    newState.calculate.push(val);
  } 
  this.setState(newState);
}

calculate() {
  let array = {...this.state.calculate}.calculate;
  let result = 0;
  let processing = null;
  let arr = this.transformArray(array);
  

  for(let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = arr[i+1];
    processing = this.reduceTerm(processing, arr[i]);

    if(next === undefined || next === null 
      || next[0] === '+' || next[0] === '-') {
        
        result = this.applyOperator(result, processing[0], processing[1]);

        processing = null;
    }

  }

   return result; 
}


reduceTerm(term1, term2) {
  if(term1 === null) return term2;

  if(term2 === null) return term1;  
  
  term1[1] = this.applyOperator(term1[1], term2[0], term2[1]);
  
  return term1;


}

applyOperator(term1, operator, term2) {
  
  if(operator === '+') return term1 + term2;
  
  if(operator === '*') return term1 * term2; 

  if(operator === '/') return term1 / term2;

  if(operator === '-') return term1 - term2;

}

transformArray(array) {
  
  //if(array[0] > 0) {
    array.unshift('+');
  //}// else {
   // array.unshift('-');
 // }
  if(isNaN(array[array.length - 1])) {
    array.pop();      
  }
  let retArray = []
  for(let i = 0; i < array.length - 1; i+=2) {
      retArray.push([array[i], parseInt(array[i+1], 10)]);
  }
  return retArray;

}

render() {
  return <div className={style.parent}>
          <div className={style.container}>
            <div id={style.screen}><span>{this.state.displayNumbers}</span></div>
            <div id={style.borderline}></div>
            <ul onClick={(e) => this.handleClick(e)} className={style.keysContainer}>
               <li id='9'>9</li>
               <li id='8'>8</li>
               <li id='7'>7</li>
               <li id='6'>6</li>
               <li id='5'>5</li>
               <li id='4'>4</li>
               <li id='3'>3</li>
               <li id='2'>2</li>
               <li id='1'>1</li>
               <li id='+'>+</li>
               <li id='-'>-</li>
               <li id='*'>*</li>
               <li id='/'>/</li>
               <li id='='>=</li>
               <li id='C'>C</li>
            </ul>
          </div>
         </div>
}


}