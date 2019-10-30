import React from "react";

const Login = () => {
  return (
    <div className="card bg-light">
      <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
        <h4 className="card-title mt-3 text-center">Login</h4>
        <p className="text-center">Login to your account</p>
        <p>
          <a href="/" className="btn btn-block btn-twitter">
            {" "}
            <i className="fab fa-twitter"></i>   Login via Twitter
          </a>
          <a href="/" className="btn btn-block btn-facebook">
            <i className="fab fa-facebook-f"></i>   Login via facebook
          </a>
        </p>
        <p className="divider-text">
          <span className="bg-light">OR</span>
        </p>
        <form>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-envelope"></i>{" "}
              </span>
            </div>
            <input
              name=""
              className="form-control"
              placeholder="Email address"
              type="email"
            />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock"></i>{" "}
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Create password"
              type="password"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Create Account{" "}
            </button>
          </div>
          <p className="text-center">
            Create a new account? <a href="/">Register</a>
          </p>
        </form>
      </article>
    </div>
  );
};

export default Login;
