
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class TodoItem extends Component {
  render() {
    return(
      <div style={{"align":"left"}}>
        <input type="checkbox" />
        {this.props.greeting}
        <br />
        <br />
      </div>
      
    )
  }

}

function App() {
  return (
    <div className="App" style={{"background-color":"#F5F5F5", height:"1000px", margin: 0, "padding-top":"100px"}}>
      <div style={{ "padding-bottom":20, "padding-top":20, width:"500px", "background-color":"#FFFFFF", "margin": "auto", border:"3px solid #EDEDED", "display": "inline-block"}}>
          <TodoItem greeting={"Вы робот 🤖?"}/>
          <TodoItem greeting={"Вы печенька 🍪?"}/>
          <TodoItem greeting={"Вы водичка 💦?"}/>
          <TodoItem greeting={"Вы песок ⛱?"}/>
      </div>
    </div>
  );
}

export default App;
