import { useState } from "react";

export const Tiles = () => {
  return (
    <div className="tiles">
      {data.map((item) => (
        <Tile data={item} key={item.id} />
      ))}
    </div>
  );
};

const Tile = ({ renderImages }) => {
  const [open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const mouseEnterHandler = () => {
    if (!mouseOver) {
      console.log(data.name);
      setMouseOver(true);
    }
  };

  const mouseLeaveHandler = () => {
    if (mouseOver) {
      setMouseOver(false);
    }
  };

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  let tileStyle = {};
  if (open) {
    tileStyle = {
      width: "62vw",
      height: "62vw",
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "0",
      marginTop: "-31vw",
      marginLeft: "-31vw",
      boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
      transform: "none",
    };
  } else {
    tileStyle = {
      width: "18vw",
      height: "18vw",
    };
  }

  return (
    <div className="tile">
      <img
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={clickHandler}
        src={renderImages.image}
        alt={renderImages.name}
        style={tileStyle}
      />
    </div>
  );
};
