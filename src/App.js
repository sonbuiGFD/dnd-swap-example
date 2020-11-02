import React, { useState } from "react";
import Board from "./component/board";
import { initDate } from "./component/ultils";

const containerStyle = {
  width: 500,
  height: 500,
  border: "1px solid gray",
};

const data = initDate();

function App() {
  const [colorList, setColorList] = useState(data);
  const [draggingItem, setDraggingItem] = useState(null);

  return (
    <div className="App">
      <div style={containerStyle}>
        <Board
          colorList={colorList}
          setColorList={setColorList}
          draggingItem={draggingItem}
          setDraggingItem={setDraggingItem}
        />
      </div>
    </div>
  );
}

export default App;
