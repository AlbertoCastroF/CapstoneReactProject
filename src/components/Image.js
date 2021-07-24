import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);
  const { addToCart, cartItems } = useContext(Context);
  const heartIcon = hovered && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className={`${
        img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
      } favorite`}
    ></i>
  );
  const cartIcon = hovered && (
    <i
      onClick={() => addToCart(img)}
      className={`${
        cartItems.some((item) => item.id === img.id)
          ? "ri-shopping-cart-fill"
          : "ri-add-circle-line"
      } cart`}
    ></i>
  );

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" alt="main-page-element" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
