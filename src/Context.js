import React, { useState, useEffect } from "react";
const Context = React.createContext("");

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartitems] = useState([]);
  const URL =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  function toggleFavorite(id) {
    const newAllPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      } else return photo;
    });
    setAllPhotos(newAllPhotos);
  }

  function addToCart(newImg) {
    if (cartItems.some((item) => item.id === newImg.id)) {
      setCartitems((prevElements) =>
        prevElements.filter((item) => item.id !== newImg.id)
      );
    } else {
      setCartitems((prevElements) => [...prevElements, newImg]);
    }
  }

  // console.log(cartItems);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        setCartitems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
