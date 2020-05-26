import React, { Component } from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
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
                            <li className="nav-item">
                                <a className="nav-link text-white" href="www.google.com">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="www.google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item " href="www.google.com">Action</a>
                                <a className="dropdown-item " href="www.google.com">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item " href="www.google.com">Something else here</a>
                            </div>
                            </li>
                            <Link to="/login">
                                <li className="nav-item">
                                <p className="nav-link text-white" aria-disabled="true">Login</p>
                                </li>
                            </Link>
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
