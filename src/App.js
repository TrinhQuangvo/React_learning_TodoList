import React ,{Component} from 'react';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control'
import './App.css';
import TaskList from './Components/TaskList';
class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            tasks :[],
            isDisplayForm:false
        }
    }
    onGenerateData = () =>{
        var tasks = [
        {id:Math.random(),name:'take out the trash',status:false},
        {id:Math.random(),name:'buy some milk',status:true},
        {id:Math.random(),name:'loremmmmmt',status:true}
    ];
        this.setState({ 
            tasks : tasks
        });
        //lưu trữ trong local storage   
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    componentDidMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
    }
    onToggleForm = () =>{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }
    onCloseForm = () =>{
        this.setState({
            isDisplayForm : false
        })
    }
    onSubmit = (data) =>{
        //data chính là this.state truyền ở taskform
        console.log(data);
        var {tasks} = this.state;
        tasks.push(data);
        this.setState({
            tasks:tasks
        })
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  
  render(){
    //var tasks = this.state.tasks
    var {tasks ,isDisplayForm} = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ?'col-xs-4 col-sm-4 col-md-4 col-lg-4' :''}>
                {elmTaskForm}
            </div>
            <div className={isDisplayForm ?'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button onClick={this.onToggleForm} type="button" className="btn btn-primary"> <span className="fa fa-plus"></span>Thêm Công Việc</button>
                <button type="button" onClick={this.onGenerateData} className="btn btn-danger ml-2"> <span className="fa fa-plus"></span>Generate Data</button>
                  <Control/>
                <TaskList tasks={tasks} />   
            </div>
        </div>
    </div>
    );
  }
}

export default App;
