import React, { useEffect, useState } from "react";
import "./styles.css";

import pic1 from "./img/bg1.jpg";
import pic2 from "./img/bg2.jpg";

function Slideshow() {
  const [active, setActive] = useState(pic1);
  const [displayImage, setDisplayImage] = useState();

  let imgArray = [pic1, pic2];

  let imgPosition = 0;
  const next = () => {
    imgPosition++;
    if (imgPosition > imgArray.length - 1) {
      imgPosition = 0;
    }
    showImg(imgPosition);
    setActive(imgArray[imgPosition]);
  };
  const prev = () => {
    imgPosition--;
    if (imgPosition < 0) {
      imgPosition = imgArray.length - 1;
    }
    showImg(imgPosition);
    setActive(imgArray[imgPosition]);
  };

  const showImg = (img) => {
    const image = imgArray[img];
    let DomImg = document.getElementById("img");
    DomImg.src = image;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <div className="slide">
        <img id="img" src={imgArray[imgPosition]} alt="" />

        <div className="slideNav">
          <i className="fa fa-arrow-left" onClick={prev}></i>
          <div className="images">
            {imgArray.map((img, index) => {
              return (
                <img
                  src={img}
                  alt="img"
                  className={img == active ? "imgActive" : ""}
                  onClick={() => {
                    setActive(img);
                    showImg(index);
                  }}
                />
              );
            })}
          </div>
          <i className="fa fa-arrow-right" onClick={next}></i>
        </div>
      </div>
    </div>
  );
}
export default Slideshow;
