import React, { Component } from 'react'
import '../../App.css'
import {Link, withRouter} from 'react-router-dom'

class Nav extends Component {
    logout(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {

        
        const loginRegLink = (
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white" aria-disabled="true">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link text-white" aria-disabled="true">
                        Signup
                    </Link>
                </li>
            </ul>
        )

        const userRegLink = (
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link to="/profile" className="nav-link text-white" aria-disabled="true">
                        My Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="." onClick={this.logout.bind(this)} className="nav-link text-white" aria-disabled="true" >
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <div className="navclass">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand text-white" href="www.google.com">SPIRIT</a>
                        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <Link to="/">
                                    <li className="nav-item active">
                                        <p className="nav-link text-white" >Home <span className="sr-only">(current)</span></p>
                                    </li>
                                </Link>
                                {localStorage.usertoken? userRegLink : loginRegLink}
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(Nav) //whenever u use history.push to redirect to pages, use withRouter