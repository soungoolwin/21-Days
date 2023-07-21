let size = 8;

let board = "";

for (y = 1; y < size; y++) {
  for (x = 1; x < size; x++) {
    if ((x + y) % 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
}
