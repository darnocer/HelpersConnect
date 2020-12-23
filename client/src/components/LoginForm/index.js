import React from "react";
import "./style.css";

function LoginForm() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      //   required
                      disabled
                      autofocus
                    />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      disabled

                      //   required
                    />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      disabled
                    />
                    <label className="custom-control-label" for="customCheck1">
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    disabled>
                    Sign in
                  </button>
                  <hr className="my-4" />
                  <a
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    href={`${window.location}auth/google`}
                    type="submit">
                    <i className="fab fa-google mr-2"></i> Sign in with Google
                  </a>
                  <p class="demo">
                    Sign in with Google or click{" "}
                    <a href="/5f6e0acb9c843d51f0334b9f" alt="link to demo">
                      here
                    </a>{" "}
                    to continue with demo
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
