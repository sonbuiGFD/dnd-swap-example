import React from "react";
import { useDrop } from "react-dnd";
import { Square } from "./square";
import { moveColor } from "./ultils";
import { Overlay } from "./overlay";

export const BoardSquare = ({
  position,
  children,
  draggingItem,
  setColorList,
  colorList,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "color",
    canDrop: () => true,
    drop: () => moveColor(draggingItem, position, setColorList, colorList),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: true,
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square>{children}</Square>
      {isOver && canDrop && <Overlay color="yellow" />}
    </div>
  );
};
