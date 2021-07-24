import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../Hooks/useHover";

function CartItem({ item }) {
  //   const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const { addToCart } = useContext(Context);
  const icon = (
    <i
      ref={ref}
      onClick={() => addToCart(item)}
      className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
    ></i>
  );
  return (
    <main className="cart-item">
      {icon}
      <img src={item.url} width="130px" alt="article" />
      <p>$4.99</p>
    </main>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
