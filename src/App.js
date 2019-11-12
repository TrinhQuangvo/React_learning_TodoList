import React ,{Component} from 'react';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control'
import './App.css';
import TaskList from './Components/TaskList';

class App extends Component {
  
  state = {
    todos: [
      {id:Math.random(),title:'take out the trash',completed:false},
      {id:Math.random(),title:'buy some milk',completed:false},
      {id:Math.random(),title:'loremmmmmt',completed:true}
    ]
  }
  render(){
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm/>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus"></span>Thêm Công Việc
                </button>
                <div className="row mt-15">
                  <Control/>
                </div>
                <TaskList/>   
            </div>
        </div>
    </div>
    );
  }
}

export default App;
