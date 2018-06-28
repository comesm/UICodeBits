import React, {Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './CenterBlock.css';

export default class CenterBlock extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            user: {
              name: null,
              age: 0,
              spouse: {
                  height: null,
                  eyeColor: null,
                  age: 0
              }  
            },
            children: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
     
    

    handleChange(e) {
        console.log(26, e.target.value); //e.target.name);
        let val = e.target.value;
        //console.log(27, this.state.user.spouse.age);
        this.setState(prevState => ({
            ...prevState.user, spouse: {
                ...prevState.user.spouse, 
                  height: 65 
            }
        }), function() {console.log(this.state)}) 

    }


    render() {
     
   return <div>
    <div>
      <button >click me</button>
        <input onChange={(e) => this.handleChange(e)} name="input"></input>
      </div>
    <div className={styles.container}>       
        <div className={styles.centered}>
            {this.state.user.spouse.height + ' ' +this.state.user.spouse.age + ' ' + this.state.user.name +this.state.user.spouse.height + ' '}
        </div>
        <div className={styles.centered}>
           {this.state.user.name}
        </div>
    </div>
    </div>
   }

}

// const CenterBlock = () => (
    
// )


