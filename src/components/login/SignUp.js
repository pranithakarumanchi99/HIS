import React from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'

function SignUp(props) {

    const signUpForm=e=>{
        e.preventDefault()
    }
    return (
        <div className='sign-up'>
              <form onSubmit={signUpForm} >
          <Link onClick={()=>props.next(1)} className='sign-up-login'>login</Link>        
    	<h4 className="modal-title">Sign Up </h4>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="First Name" required="required"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Last Name" required="required"/>
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" required="required"/>
        </div>
        <div className="form-group small clearfix">
            <label className="checkbox-inline"><input type="checkbox"/> Remember me</label>
        </div> 
        <input type="submit" className="btn btn-primary btn-block btn-lg" value="SignUp" />              
    </form>			
        </div>
    )
}

export default SignUp
