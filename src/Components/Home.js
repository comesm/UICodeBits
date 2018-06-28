import style from './Home.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as stuffActions from '../actions/stuffActions';

class Home extends Component {

constructor(props) {
    super(props);
    this.state = {
        isLoaded: false
    }
}

componentDidMount() {
    console.log(19, this.props);
   // this.props.stuffActions.fetchStuff();  
}

renderName() {
    console.log(23, this.props.stuff);
    if(this.props.stuff.length > 0) {
        console.log(24, this.props.stuff);
        return (<li>HELLO HOME</li>)
    }
}

    render() {
        return (
            <div className={style.container}>
            <div id={style.topLeft}>top left</div>
            <div id={style.topRight}>top right</div>
            <div id={style.botLeft}>bottom left</div>
            <div id={style.botRight}>bottom right</div>
           </div>
         )
        
    }
}


function mapStateToProps({ stuff }) {
    return {
        stuff
    };
   // stuff: stuff
}

function mapDispatchToProps(dispatch) {
  return {
      stuffActions: bindActionCreators(stuffActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
