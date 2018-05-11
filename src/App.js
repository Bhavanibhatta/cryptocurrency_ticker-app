import React,{Component} from 'react';
import './App.css';
import Ticker from './component/Ticker';

class App extends Component{

render(){

  return(
    <div className = "container">
    <header className="app-header">
      <h3>CryptoCurrency Ticker App</h3>
    </header>
       <Ticker />
    </div>

  );
}


}

export default App;
