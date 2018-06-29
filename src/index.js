import React from 'react';
import { render } from 'react-dom';
// import Home from './Components/Home';
// import Navigation from './Components/Navigation';
import Navigator from './Components/Navigator';

// import Login from './Components/Login';
// import CenterBlock from './Components/CenterBlock';
// import SocialCard from './Components/SocialCard';

import { Provider } from 'react-redux';
import { configureStore, history } from './store/configureStore';
import { startListener } from './middleware/listener';


require("babel-polyfill");


const store = configureStore();

console.log(15, store, history);

startListener(history, store);

const App = (data) => (
        <div>
            <Navigator />
        </div>    
)

const Root = ({ store }) => (
   <Provider store={store}>
    <App />
   </Provider>           
)



render(
<Root store={store} />,

document.getElementById("index"));