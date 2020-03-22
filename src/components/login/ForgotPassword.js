import React from 'react'
import {Link} from 'react-router-dom'
import './ForgotPassword.css'

function ForgotPassword(props) {
    const forgotPassword=e=>{
        e.preventDefault()
    }
    return (
        <div className='sign-up'>
              <form onSubmit={forgotPassword} >
          <Link onClick={()=>props.next(1)} className='forgot-password-login'>login</Link>        
    	<h4 className="modal-title">Forgot Password </h4>
        <div className="form-group">
            <input type="number" className="form-control" placeholder="UserId"   required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password"  required="required"/>
        </div> 
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Change Password"  required="required"/>
        </div>  
        <input type="submit" className="btn btn-primary btn-block btn-lg" value="Forgot Password" />            
    </form>			
        </div>
    )
}

export default ForgotPassword
