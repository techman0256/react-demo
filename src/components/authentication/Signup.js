import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import "./Signin.css";

// const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

class Signup extends Component {
  // handleLoginSuccess = (response) => {
  //   console.log('Login Success:', response);
  //   // Handle login success (e.g., send token to the server, redirect to dashboard)
  // }

  // handleLoginFailure = (response) => {
  //   console.error('Login Failed:', response);
  //   // Handle login failure
  // }

  render() {
    return (
        <div className="login">
        <h4>Sign Up</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue=""
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue=""
              className="text_input"
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          {/* <input
            type="submit"
            value="LOGIN"
            className="btn"
          /> */}
        </form>
        <GoogleLogin
          // clientId={CLIENT_ID}
          buttonText="Sign in with Google"
          // onSuccess={this.handleLoginSuccess}
          // onFailure={this.handleLoginFailure}
          // cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-btn">
              <img src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="Google" className="google-icon" width="20" height="20" />
              Sign up with Google
            </button>
          )}
        />
        <a className="link" href="/signup">Sign Up</a>
      </div>
    )
  }
}

export default Signup;
