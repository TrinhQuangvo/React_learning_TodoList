import React, { Component } from 'react'

export class TaskItems extends Component {
    render() {
        var {task ,index} = this.props;
        return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center"><span className={task.status ? 'badge badge-pill badge-success text-white' : 'badge badge-pill badge-danger text-white'}>{task.status ? 'Kích Hoạt' : 'Ẩn'}</span></td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash"></span>Xóa
                        </button>
                    </td>
                </tr>
        )
    }
}

export default TaskItems