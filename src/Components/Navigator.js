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
    console.log(e.target);
    if(e.target.name === 'listItem') {
        this.setState({showMenu: false});
    }
  }


showMenu() {

   return <div onMouseLeave={(e) => this.handleExit(e)} id={styles.menudiv}>
            <div><a name="listItem">thing 1</a></div>
            <div><a name="listItem2">thing 2</a>{
                this.state.menu.nestedMenu.display ? this.showNestMenu() : null
            }</div>
            <div><a name="listItem">thing 3</a></div>
            <div><a name="listItem">thing 4</a></div>
          </div> 
}

showNestMenu() {

    return <div onMouseLeave={(e) => this.handleExit(e)} id={styles.menudiv}>
             <div><a name="listItem">thing 1</a></div>
             <div><a name="listItem2">thing 2</a></div>
             <div><a name="listItem">thing 3</a></div>
             <div><a name="listItem">thing 4</a></div>
           </div> 
 }



render() {
  return <div className={styles.navbar}>
   <div onMouseOver={e => this.handleHover(e)} className={styles.container}>
     <div><a href="#">home</a></div> 
     <div><a name="about" href="#">about</a>{
        this.state.menu.display ? this.showMenu() : null
       }</div>
     <div><a href="#">contact</a></div>
     <div><a href="#">more</a></div>
    </div>
  </div> 

  }
}
