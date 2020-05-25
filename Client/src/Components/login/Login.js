import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {
   render() {
      return (
         <div className="container box">
            <div className = "row">
               <div className="col">
                  <div className="col-md-5">
                     <h2 className="text-center">SIGN IN</h2>
                     <p className="label control-label text-white">Username or E-mail</p>
                     <div className="input-group">
                        <span className="input-group-addon">
                           <span className="fa fa-user"></span>
                        </span>
                        <input type="text" className="form-control" name="email" placeholder="E-mail"/>
                     </div>
                     <p className="label control-label text-white">Password</p>
                     <div className="input-group">
                        <span className="input-group-addon"><link rel="stylesheet" href=""/><span className="fa fa-lock"></span></span>
                        <input type="text" className="form-control" name="password" placeholder="Password"/>
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
                     <a href="."><div className="btn btn-light btn-block">SIGN IN</div></a> <br/>
                     <Link to="/signup">
                     <p clas="text-center">Not a member yet? <a href="/signup" className="signup">Sign Up</a></p>
                     </Link>
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
