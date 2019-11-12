import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <span className="fa fa-search">Tìm Kiếm</span>
                  </button>
                </span>
            </div>
        )
    }
}

export default Search
