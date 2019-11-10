import React ,{Component} from 'react';

import './App.css';

class  App extends Component {
  
  state = {
    todos: [
      {id:Math.random(),title:'take out the trash',completed:false},
      {id:Math.random(),title:'buy some milk',completed:false},
      {id:Math.random(),title:'loremmmmmt',completed:true}
    ]
  }
  render(){
    console.log(this.state.todos)
    return (
      <div><h1>Hello React</h1></div>
    );
  }
}

export default App;
