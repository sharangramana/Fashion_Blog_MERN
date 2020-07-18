import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            First_name : "",
            Last_name : "",
            Email: "",
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken 
        const decoded = jwt_decode(token)
        this.setState ({
            First_name: decoded.First_name,
            Last_name: decoded.Last_name,
            Email: decoded.Email
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 max-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.First_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.Last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.Email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
