import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Navigator.css';


export default class Navigator extends Component {

constructor() {
    super();
    this.state = {
        menu: {
            display:  false,
            nestedMenu: {
                display: false
            }
        }
    }
}

handleHover(e) {
  console.log(e.target);
  if(e.target.name === 'about' || e.target.name === 'listItem2') {
      this.setState(prevState => ({        
          ...prevState, menu: {
              ...prevState.menu, 
              display: true,
              nestedMenu: {
                  ...prevState.menu.nestedMenu,
                  display: true
              }
          }  
        })
    )
  }
}

handleExit(e) {
   // if(e.target.name === 'listItem') {
        let newState = {...this.state};
        newState.menu.display = false;
        this.setState(newState);
   // }
  }


showMenu() {

   return <ul id={styles.menu}> 
           <li><a name="listItem">thing 1</a></li>
           <li><a name="listItem2">thing 2</a>{this.showNestMenu()}</li>
           <li><a name="listItem">thing 3</a></li>
           <li><a name="listItem">thing 4</a></li>
          </ul>
 
}

showNestMenu() {

    return <ul id={styles.submenu}>
             <li><a name="listItem">sub thing 1</a></li>
             <li><a name="listItem2">sub thing 2</a></li>
             <li><a name="listItem">sub thing 3</a></li>
             <li><a name="listItem">sub thing 4</a></li>
           </ul> 
 }



render() {
  
 return <div onMouseOver={e => this.handleHover(e)} className={styles.container}>
     <a href="#">home</a> 
     <div ><a style={{textDecoration: 'none', color: 'yellow'}} name="about" href="#">about</a>{
        this.state.menu.display ? this.showMenu() : null
       }</div>
     <a href="#">contact</a>
     <a href="#">more</a>
     </div>

  }
}
