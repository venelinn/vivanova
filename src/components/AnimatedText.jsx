
import React, { useState, useRef } from "react";

import classes from "./AnimatedText.module.scss";

const AnimatedText = ({ type, textColor, overlayColor, text, children, ...props }) => {
  const containerElem = useRef(null);
  const initialMousePos = { x: 0, y: 0 };

  const [mousePos, setMousePos] = useState(initialMousePos);

  const handleMouseMove = event => {
    event = event.nativeEvent;
    const elem = containerElem.current;
    const newX = (event.offsetX / elem.clientWidth) * 100;
    const newY = (event.offsetY / elem.clientHeight) * 100;
    const newMousePos = {
      x: newX,
      y: newY
    };
    setMousePos(newMousePos);
  };

  const handleMouseOut = () => setMousePos(initialMousePos);

  return (
    <section
      className={classes.animatedTextContainer}
      style={{
        "--maskX": mousePos.x,
        "--maskY": mousePos.y
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={containerElem}
      {...props}
    >
      <h1
        style={{ color: textColor }}
        className={classes.animatedTextContent}
      >
        {text}
      </h1>
      <h1
        style={{ color: overlayColor }}
        className={classes.animatedTextContentClone}
      >
        {text}
      </h1>
    </section>
  );
};

export { AnimatedText };
