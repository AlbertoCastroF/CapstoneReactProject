import React, { useContext } from "react";
import { getClass } from "../utils/index";
import Image from "../components/Image";
import { Context } from "../Context";

function Photos() {
  const { allPhotos } = useContext(Context);
  return (
    <main className="photos">
      {allPhotos.map((image, inx) => (
        <Image key={image.id} img={image} className={getClass(inx)} />
      ))}
    </main>
  );
}

export default Photos;
