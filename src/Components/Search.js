import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
             <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search"/>
              <input type="submit" className="btn btn-success" value="Submit" />
            </div>
          </div>
        )
    }
}

export default Search
