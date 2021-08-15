import React, { useState } from "react";
import { useGlobalCartContext } from "../contexts/CartContext";
import { useHistory } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { total, clearCart } = useGlobalCartContext();
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: parseInt(total * 100),
    publicKey: "pk_test_645792588e22e9d3333959f7e3595c25046d47ae",
  };
  const history = useHistory();
  const onSuccess = (reference) => {
    clearCart();
  };

  const onClose = () => {
    history.push("/cart");
  };
  const initializePayment = usePaystackPayment(config);

  return (
    <section className="container p-5 mt-5">
      <form className=" p-4 py-lg-5 width-400 mx-auto shadow rounded bg-light">
        <div className="form-group">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control w-100"
            placeholder="please enter your email"
          />
        </div>
        <div className="form-group mt-1">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control "
            placeholder="please enter your name"
          />
        </div>
        <div className="form-group mt-1">
          <label>Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            placeholder="please enter your phone number"
          />
        </div>
      </form>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        className="btn mt-3 w-25 mx-auto shadow btn-primary btn-block"
      >
        Pay NGN {total} now!
      </button>
    </section>
  );
};

export default Checkout;
