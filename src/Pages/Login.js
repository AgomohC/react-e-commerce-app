import React from "react";

const Login = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6">
            <div className="card" style={{ borderRadius: 1 + "rem" }}>
              <div className="row g-0">
                <div className="col d-flex align-items-center justify-content-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 + "px" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 " style={{ color: "#393f81" }}>
                        Don't have an account?
                        <a href="#!" className="ml-2">
                          Register here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
