import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './LoginPage.css'

function LoginPage(props) {
    const [loginData,setLoginData]=useState({
        userId:null,
        password:null
      })

    const login=e=>{
        e.preventDefault()
        
      }
    return (
        <div>
             <form onSubmit={login} >
		<div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
    	<h4 className="modal-title">Login to Your Account</h4>
        <div className="form-group">
            <input type="number" className="form-control" placeholder="UserId"  value={loginData.userId} onChange={e=>setLoginData({...loginData,'userId':e.currentTarget.value})} required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" value={loginData.password} onChange={e=>setLoginData({...loginData,'password':e.currentTarget.value})} required="required"/>
        </div>
        <div className="form-group small clearfix">
            <label className="checkbox-inline"><input type="checkbox"/> Remember me</label>
            <Link onClick={()=>props.next(2)} className="forgot-link">Forgot Password?</Link>
        </div> 
        <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" />              
    </form>			
    <div className="text-center small">Don't have an account? <Link onClick={()=>props.next(3)}>Sign up</Link></div>
        </div>
    )
}

export default LoginPage
