import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
           <div className='card login-card'>
           <form>
  <div class="form-group">
    <label >User Id</label>
    <input type="number" class="form-control"  aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
           </div>
            
        </div>
    )
}

export default Login
