import React from 'react';
import { render } from 'react-dom';

import Calculator from './Components/Calculator';

import { Provider } from 'react-redux';
import { configureStore, history } from './store/configureStore';
import { startListener } from './middleware/listener';


require("babel-polyfill");


const store = configureStore();

console.log(15, store, history);

startListener(history, store);

// const App = (data) => (
//         <div>
//             <Navigator />
//         </div>    
// )

const Root = ({ store }) => (
   <Provider store={store}>
    <Calculator />
   </Provider>           
)



render(
<Root store={store} />,

document.getElementById("index"));