import React, { Component } from 'react'

export class TaskForm extends Component {
    //dùng state để lưu trữ giá trị các coltrol 
    constructor(props){
        super(props)
        this.state = {
            name:'',
            status:false
        }
    }
    onCloseForm =()=>{
        this.props.onCloseForm();
    }

    onSubmit =(event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        
        this.onClear();
        this.onCloseForm();
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status')
            value = target.value === 'true'? true : false;
        this.setState({
            [name] : value
        })
    }
    onClear = () =>{
        this.setState({
            name:'',
            status:false
        })
    }
    render() {
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc
                            <button className='btn btn-danger ml-3' onClick={this.onCloseForm}>&times;</button>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" name="name" onChange={this.onChange} value={this.state.name} className="form-control" />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" name="status" value={this.state.status} onChange={this.onChange} required="required">
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="submit" onClick={this.onClear} className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskForm
