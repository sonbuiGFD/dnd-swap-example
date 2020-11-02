import React from "react";
import { BoardSquare } from "./boardSquare";
import { ColorItem } from "./item";

const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};

const squareStyle = { width: "12.5%", height: "12.5%" };

const Board = ({ colorList, draggingItem, setDraggingItem, setColorList }) => {
  console.log("Board -> colorList", colorList);
  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={squareStyle}>
        <BoardSquare
          position={{ x, y }}
          colorList={colorList}
          draggingItem={draggingItem}
          setColorList={setColorList}
        >
          {renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }
  function renderPiece(x, y) {
    return (
      <ColorItem
        colorList={colorList}
        setDraggingItem={setDraggingItem}
        position={{ x, y }}
      />
    );
  }

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }
  return <div style={boardStyle}>{squares}</div>;
};

export default Board;
