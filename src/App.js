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
            isDisplayForm:false,
            taskEditing:null,
            filter:{filterName:'',filterStatus:-1},
            keyword:'',
            sort:{
                by:'',value:1
            }
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
            isDisplayForm : false,
        })
    }
    onSubmit = (data) =>{
        //data chính là this.state truyền ở taskform
        console.log(data);
        var {tasks} = this.state;
        if(data.id === ''){
            /* nếu id rỗng tức là dữ liệu mới thêm vào ngược lại là edit */
            data.id = Math.random();
            tasks.push(data);
        }else{
            var index = this.findIndex(data.id);
            tasks[index] = data
        }
        this.setState({
            tasks:tasks,
            taskEditing : null
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onUpdateStatus = (id) =>{
        var {tasks} = this.state
        var index = this.findIndex(id);
        if(index !== -1){
            tasks[index].status = !tasks[index].status
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }
    }
    findIndex = (id) =>{
        var {tasks} = this.state;
        var result = -1
        tasks.forEach((task,index)=>{
            if(task.id ===id){
                result = index
            }
        });
        return result
    }
    onDeleteItem = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            tasks.splice(index,1);
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
            this.onCloseForm();
        }
    }
    onShowForm = () =>{
        this.setState({
            isDisplayForm : true
        })
    }
    onUpdate = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index]
        //console.log(taskEditing)
        this.setState({
            //lấy task đang cập nhật
            taskEditing : taskEditing
        });
        this.onShowForm();
    }
    onFilter = (filterName,filterStatus)=>{
        console.log(filterName + ' ' + filterStatus)
        filterStatus = parseInt(filterStatus,10);
        this.setState({
            filter : {
                name: filterName,
                status: filterStatus
            }
        })
    }
  render(){
    //var tasks = this.state.tasks
    var {tasks ,isDisplayForm , taskEditing , filter} = this.state;
   
    if(filter){
        if(filter.name){
        tasks = tasks.filter( (task) =>{
            console.log('wtf is ' + task.name)
            return task.name.toLowerCase().indexOf(filter.name) !== -1
        })
    }
        tasks = tasks.filter(task =>{
            if(filter.status === -1){
                return task;
            }else{
                return task.status === (filter.status === 1 ? true : false) 
            }
        })
    }
    var elmTaskForm = isDisplayForm ? 
        <TaskForm 
            key={this.state.id} 
            task={taskEditing} 
            onSubmit={this.onSubmit} 
            onCloseForm={this.onCloseForm}
        /> : '';
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
                {/* <button type="button" onClick={this.onGenerateData} className="btn btn-danger ml-2"> <span className="fa fa-plus"></span>Generate Data</button> */}
                  <Control keyword={this.state.keyword}/>
                <TaskList 
                onUpdateStatus={this.onUpdateStatus} 
                tasks={tasks}
                onDeleteItem = {this.onDeleteItem}
                onUpdate = {this.onUpdate} 
                onFilter = {this.onFilter}
                />   
            </div>
        </div>
    </div>
    );
  }
}

export default App;
