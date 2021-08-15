import React from "react";
import { useGlobalCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    total,
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem,
  } = useGlobalCartContext();

  return cartItems.length ? (
    <section className="container">
      <div className=" row mt-5 height-3">
        <div
          onClick={clearCart}
          className="btn mx-auto shadow-lg mt-5 mb-3 btn-danger shadow-lg text-capitalize"
        >
          clear cart
        </div>
      </div>
      <table className="table rounded mt-5 bg-light table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, idx) => {
            const { id, title, price, image, quantity, total } = item;
            const str = title.substring(0, 20);

            return (
              <tr key={id}>
                <th scope="row">{idx + 1}</th>
                <td>
                  <div className="height-3 width-4">
                    <img
                      src={image}
                      alt={title.substring(0, 10)}
                      className="img-responsive height-3 img-thumbnail"
                    />
                  </div>
                </td>
                <td>{str}...</td>
                <td>NGN {price}</td>

                <td>
                  <button
                    id={id}
                    onClick={(e) => decreaseItem(e.target.id)}
                    className="btn btn-outline-warning "
                  >
                    -
                  </button>
                  <span className="text-dark p-2">{quantity}</span>
                  <button
                    id={id}
                    onClick={(e) => increaseItem(e.target.id)}
                    className="btn btn-outline-success "
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    id={id}
                    onClick={(e) => removeItem(e.target.id)}
                    className="btn btn-danger text-capitalize text-light "
                  >
                    delete
                  </button>
                </td>
                <td>NGN {total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="row justify-content-end">
        <div className="col-8 col-md-3 py-3 mr-3   bg-light rounded justify-content-end">
          <div className="col-9 h6">Subtotal: NGN {total}</div>
          <div className="col-8 h6">Tax: 0</div>
          <div className="col-8 h6">Total: 0</div>
          <div className="col-9 h6 justify-self-center mt-3">
            <Link to="/checkout">
              <button className="btn w-md-75 btn-primary text-capitalize">
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="container">
      <div className="row mt-5 height-3">
        <Link to="/" className="mx-auto shadow-lg mt-5 mb-3">
          <div className="btn btn-danger shadow-lg text-capitalize">
            back to home
          </div>
        </Link>
      </div>
      <h3 className="mx-auto text-center mt-5 text-white">
        Your cart is empty
      </h3>
    </section>
  );
};

export default Cart;
