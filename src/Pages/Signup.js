import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Failed to create account");
    }
    setLoading(false);
  };
  return (
    <section className="vh-100 mt-4">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6">
            <div className="card my-5" style={{ borderRadius: 1 + "rem" }}>
              <div className="row g-0">
                <div className="col d-flex align-items-center justify-content-center">
                  <div className="card-body p-4 px-lg-5 py-lg-5 text-black">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <form onSubmit={(e) => handleSubmit(e)}>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 + "px" }}
                      >
                        Create a New Account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          ref={emailRef}
                          type="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Email address</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          ref={passwordRef}
                          type="password"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Password</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          ref={confirmPasswordRef}
                          type="password"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Confirm Password</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          disabled={loading}
                        >
                          Sign Up
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-3 " style={{ color: "#393f81" }}>
                        Already have an account?
                        <Link to="/login" className="ml-2">
                          Log in
                        </Link>
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

export default Signup;
