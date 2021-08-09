import React from "react";
import ItemList from "../components/ItemList";
import { useGlobalCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useGlobalCartContext();

  return (
    <main className="mt-5">
      <section className="container mt-5">
        <ul className="list-group mt-5">
          {cartItems.map((item) => {
            const { id, title, price, image, quantity } = item;
            console.log(item);
            return (
              <div key={id} className="list-group-item">
                <div className="media-left media-middle">
                  <img src={image} alt={title} />
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Cart;
