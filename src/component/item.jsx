import React from "react";
import { useDrag } from "react-dnd";

const colorStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
  width: "100%",
  height: "100%",
};

export const ColorItem = ({ position, colorList, setDraggingItem }) => {
  const id = `${position.x}x${position.y}`;
  const colorItem = colorList[id];
  const background = colorItem && colorItem.color;

  const [{ isDragging }, drag] = useDrag({
    item: { type: "color" },
    begin: () => {
      setDraggingItem(position);
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        ...colorStyle,
        opacity: isDragging ? 0.5 : 1,
        background: `${background}`,
      }}
    ></div>
  );
};
