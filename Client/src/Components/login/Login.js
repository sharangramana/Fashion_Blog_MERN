import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {login} from './UserFunctions'

export default class Login extends Component {
   constructor() {
      super()
      this.state = {
         Email: "",
         Password: "",
      }
   }

   onChange(event) {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   onSubmit(event) {
      event.preventDefault()
      const user = {
         Email : this.state.Email,
         Password : this.state.Password,
      }

      login(user).then(res => {
         if(res) {
            this.props.history.push('/profile')
         }
      })
   }

   render() {
      return (
         <div className="container box">
            <div className = "row">
               <div className="col">
                  <div className="col-md-5">
                     <h2 className="text-center">SIGN IN</h2>
                     <p className="label control-label text-white">E-mail</p><form onSubmit={this.onSubmit.bind(this)}>
                     <div className="input-group">
                        <span className="input-group-addon">
                           <span className="fa fa-user"></span>
                        </span>
                        <input type="email" 
                              className="form-control" 
                              name="Email" placeholder="E-mail" 
                              value={this.state.Email}
                              onChange={this.onChange.bind(this)} 
                        />
                     </div>
                     <p className="label control-label text-white">Password</p>
                     <div className="input-group">
                        <span className="input-group-addon"><link rel="stylesheet" href=""/><span className="fa fa-lock"></span></span>
                        <input type="password" 
                              className="form-control" 
                              name="Password" placeholder="Password"
                              value={this.state.Password}
                              onChange={this.onChange.bind(this)} 
                        />
                     </div>  
                     <div className="row">
                        <div className="col-md-4">
                           <input type="checkbox"/><small className="remember">Remember me</small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                           <a href="."><p className="text-right">Forget Password?</p></a>
                        </div>
                     </div>
                     <button type="submit"  className="btn btn-light btn-block">SIGN IN</button> <br/>
                     <Link to="/signup">
                     <p clas="text-center">Not a member yet? Sign Up</p>
                     </Link>
                     </form>
                  </div>
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
