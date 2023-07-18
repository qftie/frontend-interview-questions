// Import necessary modules
const { app, BrowserWindow } = require("electron");

// Create a new window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html file
  win.loadFile("index.html");

  // Open the DevTools.
  win.webContents.openDevTools();
}

// When the app is ready, create the window
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Implement automatic chess playing between two players
let currentPlayer = 1;
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

function checkWin(row, col) {
  let count = 1;
  let i = row - 1;
  let j = col;
  while (i >= 0 && board[i][j] === currentPlayer) {
    count++;
    i--;
  }
  i = row + 1;
  while (i < 6 && board[i][j] === currentPlayer) {
    count++;
    i++;
  }
  if (count >= 5) {
    return true;
  }

  count = 1;
  i = row;
  j = col - 1;
  while (j >= 0 && board[i][j] === currentPlayer) {
    count++;
    j--;
  }
  j = col + 1;
  while (j < 7 && board[i][j] === currentPlayer) {
    count++;
    j++;
  }
  if (count >= 5) {
    return true;
  }

  count = 1;
  i = row - 1;
  j = col - 1;
  while (i >= 0 && j >= 0 && board[i][j] === currentPlayer) {
    count++;
    i--;
    j--;
  }
  i = row + 1;
  j = col + 1;
  while (i < 6 && j < 7 && board[i][j] === currentPlayer) {
    count++;
    i++;
    j++;
  }
  if (count >= 5) {
    return true;
  }

  count = 1;
  i = row - 1;
  j = col + 1;
  while (i >= 0 && j < 7 && board[i][j] === currentPlayer) {
    count++;
    i--;
    j++;
  }
  i = row + 1;
  j = col - 1;
  while (i < 6 && j >= 0 && board[i][j] === currentPlayer) {
    count++;
    i++;
    j--;
  }
  if (count >= 5) {
    return true;
  }

  return false;
}

function play(row, col) {
  if (board[row][col] !== 0) {
    return;
  }
  board[row][col] = currentPlayer;
  if (checkWin(row, col)) {
    console.log(`Player ${currentPlayer} wins!`);
    board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    currentPlayer = 1;
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
}
