import React from 'react';

function Register() {
  return (
    <div className="register">
      <h2>Create an Account</h2>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full Name" required/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" required/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" required/>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm password" required/>
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;