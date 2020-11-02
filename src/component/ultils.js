import update from "immutability-helper";

export function moveColor(from, to, setColorList, colorList) {
  const fromId = `${from.x}x${from.y}`;
  const fromItem = colorList[fromId];

  const toId = `${to.x}x${to.y}`;
  const toItem = colorList[toId];

  const newData = update(colorList, {
    [fromId]: { $set: toItem },
    [toId]: { $set: fromItem },
  });

  setColorList(newData);
}

const col0 = [
  "#ffcccc",
  "#ff9999",
  "#ff6666",
  "#ff3333",
  "#ff0000",
  "#cc0000",
  "#990000",
  "#660000",
];
const col1 = [
  "#ffe6cc",
  "#ffcc99",
  "#ffb366",
  "#ff9933",
  "#ff8000",
  "#cc6600",
  "#994c00",
  "#663300",
];
const col2 = [
  "#ffffcc",
  "#ffff99",
  "#ffff66",
  "#ffff33",
  "#ffff00",
  "#cccc00",
  "#999900",
  "#666600",
];
const col3 = [
  "#e6ffcc",
  "#ccff99",
  "#b3ff66",
  "#99ff33",
  "#80ff00",
  "#66cc00",
  "#4d9900",
  "#336600",
];
const col4 = [
  "#ccffcc",
  "#99ff99",
  "#66ff66",
  "#33ff33",
  "#00ff00",
  "#00cc00",
  "#009900",
  "#006600",
];
const col5 = [
  "#ccffe6",
  "#99ffcc",
  "#66ffb3",
  "#33ff99",
  "#00ff80",
  "#00cc66",
  "#00994d",
  "#006633",
];
const col6 = [
  "#ccffff",
  "#99ffff",
  "#66ffff",
  "#33ffff",
  "#00ffff",
  "#00cccc",
  "#009999",
  "#006666",
];
const col7 = [
  "#cce5ff",
  "#99ccff",
  "#66b2ff",
  "#3399ff",
  "#007fff",
  "#0066cc",
  "#004c99",
  "#003366",
];

const data = {
  "0x0": {
    color: "#efee1f",
  },
};
const colorTable = [col0, col1, col2, col3, col4, col5, col6, col7];
export function initDate() {
  let tempData = {};
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      tempData[`${i}x${j}`] = { color: colorTable[i][j] };
    }
  }

  return tempData;
}
