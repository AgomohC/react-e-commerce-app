import React from "react";
import ItemList from "../components/ItemList";
import { useGlobalCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useGlobalCartContext();

  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
      veritatis suscipit ipsum dolor magni ullam illo odio deserunt. Minima
      expedita, qui rerum aut commodi quaerat voluptatibus cumque! Culpa ex
      quasi et eaque? Facilis numquam eligendi, corporis repudiandae neque sed
      quibusdam magni enim vitae, nemo velit a nobis eos voluptatem soluta, odio
      distinctio itaque suscipit consequuntur! Labore cumque minima asperiores
      ea facilis vel vero, est architecto voluptate repudiandae, ad laudantium
      officiis delectus aliquid natus qui! Libero at, ipsam iure, aperiam alias,
      blanditiis consectetur vel facere id veritatis quam ratione obcaecati
      fuga! Expedita et alias fugit, harum velit eaque atque cum quaerat dolor
      obcaecati esse a iste ipsa fugiat voluptas laboriosam tempora iusto rerum
      explicabo exercitationem veniam sunt. Beatae possimus in nulla pariatur
      amet eos repellat, expedita deserunt deleniti quaerat ad quae,
      perspiciatis voluptate repudiandae dolore veniam est aperiam et provident
      commodi numquam atque molestias! Eligendi similique aliquid voluptates
      suscipit quasi tempora. Reiciendis dolores amet dolorem perferendis minima
      ut deserunt enim, numquam culpa saepe consectetur nulla, officiis qui?
      Dolorem maiores, ipsum modi impedit error voluptatibus cum, laboriosam
      architecto consectetur quos animi numquam magnam iste omnis aut iure! Quo
      vitae ullam amet sint eius omnis est commodi. Nulla debitis illo commodi
      perspiciatis animi?
    </h1>
  );
};

export default Cart;
