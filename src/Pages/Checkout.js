import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
import { useGlobalCartContext } from "../contexts/CartContext";
// import { PayPalButton } from "react-paypal-button-v2";
import { usePaystackPayment } from "react-paystack";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { total } = useGlobalCartContext();
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: parseInt(total * 100),
    publicKey: "pk_test_645792588e22e9d3333959f7e3595c25046d47ae",
  };
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  // const publicKey = "pk_test_645792588e22e9d3333959f7e3595c25046d47ae";
  // const amount = total * 100;
  // const componentProps = {
  //   email,
  //   amount,
  //   metadata: {
  //     name,
  //     phone,
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: () =>
  //     alert("Thanks for doing business with us! Come back soon!!"),
  //   onClose: () => alert("Please, don't go!!"),
  // };

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
      {/* <PaystackButton {...componentProps} className="btn btn-primary btn-block">
        Pay NGN {total} now!
      </PaystackButton> */}
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
