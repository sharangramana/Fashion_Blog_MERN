import React, { Component } from 'react'
import './login.css'
import {register} from './UserFunctions'

function ValidationMessage(props) {
    // console.log(props.valid)
    if(!props.valid) {
        return (
            <div className="invalid-feedback">
                {props.msg}
            </div>
        )
    }
    return null;
}

export default class Signup extends Component {

    state = {
        First_name : "",
        Last_name: "",
        Email: "",
        Number: "",
        password: "",
        reEnterPassword: "",
    
        userNameValid : false,
        EmailValid: false,
        passwordValid: false,
        reEnterPassValid: false,
        NumberValid: false,
        formValid: false,

        errorMsg : {},
        responsemessage : ""
    }


    validateForm = () => {
        console.log(this.state);
        const {userNameValid, EmailValid, passwordValid, reEnterPassValid, NumberValid} = this.state;
        this.setState ({
            formValid: userNameValid && EmailValid && passwordValid && reEnterPassValid && NumberValid
        })
    }

    handlebutton = (e) => {
        e.preventDefault()

        const user = {
            First_name : this.state.First_name,
            Last_name : this.state.Last_name,
            Number : this.state.Number,
            Email : this.state.Email,
            Password : this.state.Password,
        }

        register(user).then(res => {
            this.props.history('/login')
        })
    }

    handleChange = (event) => {
        const{name, value} = event.target

        if (name === "First_name") this.validateName(value)
        if (name === "Email") this.validateEmail(value) 
        if (name === "Number") this.validateNumber(value)   
        if (name === "password") this.validatePassword(value) 
        if (name === "reEnterPassword") this.validateReEnterPassword(value) 

        this.setState ({
            [name]: value
        })
    }

    validateName = (First_name) =>{
        //const {First_name} = this.state;
        let userNameValid = true;
        let errorMsg = {...this.state.errorMsg}

        if(First_name.length <3 || First_name.length>26) {
            userNameValid = false;
            errorMsg.First_name = (First_name.length<3) ? 
                                "Must be atleast three character long" : 
                                "Should not be greater than 26 characters ";

        }
        this.setState({userNameValid, errorMsg}, this.validateForm)
        // this.setState({
        //     [userNameValid]: userNameValid,
        //     [errorMsg]: errorMsg,
        // }, this.validateForm)
    }

    validateEmail = (mail) =>{
        let EmailValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
            EmailValid = false;
            errorMsg.Email = 'Invalid Email format'
        }

        this.setState({EmailValid, errorMsg}, this.validateForm)
    }

    validatePassword = (password) => {
        let passwordValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (password.length < 6) {
            passwordValid = false;
            errorMsg.password = 'Password must be at least 6 characters long';
        } else if (!/\d/.test(password)){
            passwordValid = false;
            errorMsg.password = 'Password must contain a digit';
        } else if (!/[!@#$%^&*]/.test(password)){
            passwordValid = false;
            errorMsg.password = 'Password must contain special character: !@#$%^&*';
            }
        this.setState({passwordValid, errorMsg}, this.validateForm);
    }

    validateNumber = (Number) => {
        let NumberValid = true;
        let errorMsg = {...this.state.errorMsg}

        if(Number.length >10 || Number.length < 10) {
            NumberValid = false;
            errorMsg.Number = 'Invalid Mobile Number'
        }
        this.setState({NumberValid, errorMsg}, this.validateForm);
    }
    
    validateReEnterPassword = (reEnterPassword) => {
        let reEnterPassValid = true;
        let errorMsg = {...this.state.errorMsg}

        if( this.state.password === reEnterPassword )
            reEnterPassValid = true; 
        else {
            reEnterPassValid = false;
            errorMsg.reEnterPassword = 'Password did\'nt match';
        }
        this.setState({reEnterPassValid, errorMsg}, this.validateForm);
    }


    render() {
        return (
            <div className="container signupbox">
            <div className = "row">
                <div className="col"> 
                    <form >
                        <div className="col-md-5">
                            <h2 className="text-center">SIGN UP</h2>

                            <p className="label control-label text-white"> First Name</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-user"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="First_name" 
                                    value = {this.state.First_name}
                                    placeholder="First Name"
                                    onChange = {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.userNameValid} msg = {this.state.errorMsg.First_name}/>
                            </div>
                            
                            <p className="label control-label text-white"> Last Name</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-user"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="Last_name" 
                                    value = {this.state.Last_name}
                                    placeholder="Last Name"
                                    onChange = {this.handleChange}
                                    required
                                />
                            </div>
                            
                            <p className="label control-label text-white">E-mail</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-envelope"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="Email" 
                                    value = {this.state.Email}
                                    placeholder="E-mail"
                                    onChange= {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.EmailValid} msg = {this.state.errorMsg.Email}/>
                            </div>
                            
                            <p className="label control-label text-white">Contact No</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-phone"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid"    
                                    name="Number" 
                                    value = {this.state.Number}
                                    placeholder="Phone"
                                    onChange = {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.NumberValid} msg = {this.state.errorMsg.Number}/>
                            </div>
                            
                            <p className="label control-label text-white">Password</p>
                            <div className="input-group">
                                <span className="input-group-addon"><link rel="stylesheet" href=""/><span className="fa fa-lock"></span></span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="password"
                                    value = {this.state.password} 
                                    placeholder="Password"
                                    onChange = {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.passwordValid} msg = {this.state.errorMsg.password}/>
                            </div>
                            
                                                
                            <p className="label control-label text-white">Re-enter Password</p>
                            <div className="input-group">
                                <span className="input-group-addon"><link rel="stylesheet" href=""/><span className="fa fa-lock"></span></span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="reEnterPassword" 
                                    value = {this.state.reEnterPassword}
                                    placeholder="Re-enter Password"
                                    onChange = {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.reEnterPassValid} msg = {this.state.errorMsg.reEnterPassword}/>
                            </div>
                            
                            <button className="btn btn-light btn-block btn-rounded" disabled={!this.state.formValid} 
                                    type="submit" onClick={this.handlebutton} >
                                SIGN UP
                            </button>
                            <p>{this.state.responsemessage}</p>
                            <br /> 
                            <small className="pull-right" style={{color:"orange"}}>* Fill out all the details to signup</small>
                            <br />
                        </div>
                    </form>

                    <div className="col-md-2">
                    </div>
                    <div className="col-md-5">
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

//disabled={!this.state.formValid} 