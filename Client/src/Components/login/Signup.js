import React, { Component } from 'react'
import './login.css'

function ValidationMessage(props) {
    // console.log(props.valid)
    if(!props.valid) {
        return (
            // <div class="alert alert-warning fade show" role="alert" style={{display: null}}>
            //     {props.msg}
            // </div>
            <div className="invalid-feedback">
                {props.msg}
            </div>
        )
    }
    return null;
}

export default class Signup extends Component {

    state = {
        userName : "",
        email: "",
        number: "",
        password: "",
        reEnterPassword: "",
    
        userNameValid : false,
        emailValid: false,
        passwordValid: false,
        reEnterPassValid: false,
        numberValid: false,
        formValid: false,

        errorMsg : {},
        responsemessage : ""
    }

    // componentDidMount() {
    //     this.handlebutton()
    // }

    validateForm = () => {
        console.log(this.state);
        const {userNameValid, emailValid, passwordValid, reEnterPassValid, numberValid} = this.state;
        this.setState ({
            formValid: userNameValid && emailValid && passwordValid && reEnterPassValid && numberValid
        })
    }

    handlebutton = (event) => {
        event.preventDefault()

        fetch("http://localhost:5000/signupresponse")
        .then(res => res.text())
        .then(res => this.setState({responsemessage: res}))
        .catch(err => err)

        window.location.href = "http://localhost:3000/"
        event.returnValue = ''
    }

    handleChange = (event) => {
        const{name, value} = event.target

        if (name === "userName") this.validateName(value)
        if (name === "email") this.validateEmail(value) 
        if (name === "number") this.validateNumber(value)   
        if (name === "password") this.validatePassword(value) 
        if (name === "reEnterPassword") this.validateReEnterPassword(value) 

        this.setState ({
            [name]: value
        })
    }

    validateName = (userName) =>{
        //const {userName} = this.state;
        let userNameValid = true;
        let errorMsg = {...this.state.errorMsg}

        if(userName.length <3 || userName.length>26) {
            userNameValid = false;
            errorMsg.userName = (userName.length<3) ? 
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
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
            emailValid = false;
            errorMsg.email = 'Invalid email format'
        }

        this.setState({emailValid, errorMsg}, this.validateForm)
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

    validateNumber = (number) => {
        let numberValid = true;
        let errorMsg = {...this.state.errorMsg}

        if(number.length >10 || number.length < 10) {
            numberValid = false;
            errorMsg.number = 'Invalid Mobile number'
        }
        this.setState({numberValid, errorMsg}, this.validateForm);
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

                            <p className="label control-label text-white">Name</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-user"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="userName" 
                                    value = {this.state.userName}
                                    placeholder="Name"
                                    onChange = {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.userNameValid} msg = {this.state.errorMsg.userName}/>
                            </div>
                            

                            <p className="label control-label text-white">E-mail</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-envelope"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid" 
                                    name="email" 
                                    value = {this.state.email}
                                    placeholder="E-mail"
                                    onChange= {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.emailValid} msg = {this.state.errorMsg.email}/>
                            </div>
                            
                            <p className="label control-label text-white">Contact No</p>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="fa fa-phone"></span>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control is-invalid"    
                                    name="number" 
                                    value = {this.state.number}
                                    placeholder="Phone"
                                    onChange = {this.handleChange}
                                    required
                                />
                                <ValidationMessage valid = {this.state.numberValid} msg = {this.state.errorMsg.number}/>
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