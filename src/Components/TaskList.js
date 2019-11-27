import React, { Component } from 'react'
import TaskItems from './TaskItems'

export class TaskList extends Component {
     // filter 
     constructor(props){
        super(props);
        this.state ={
            filterName : '',
            filterStatus: -1, // all = -1 ; hidden : 0 , active : 1  
        }
    }
    onChange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name]:value
        });
        //gọi props truyền input ra ngoài 
    }
    render() {
       
        var {tasks} = this.props
        var {filterName,filterStatus} = this.state;
        var elementTasks = tasks.map((task ,index) => {
            return <TaskItems 
                    onUpdateStatus={this.props.onUpdateStatus} 
                    key={index} index={index} 
                    task={task}
                    onDeleteItem = {this.props.onDeleteItem}
                    onUpdate = {this.props.onUpdate}    
                    />
        })
        return (
            <div>
                 <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={filterName}                                            
                                            name="filterName" 
                                            onChange={this.onChange}
                                            />
                                    </td>
                                    <td>
                                        <select 
                                            className="form-control" 
                                            name="filterStatus"
                                            onChange={this.onChange}
                                            value={filterStatus}
                                            >
                                            <option value="-1">Tất Cả</option>
                                            <option value="0">Ẩn</option>
                                            <option value="1">Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                               {elementTasks}
                               </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList
