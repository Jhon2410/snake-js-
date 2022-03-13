window.addEventListener("load", () => {
  const tablero = document.querySelector(".tablero");

  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const vacio = board;

  class Snake {
    constructor(posiciones, tamaño) {
      this.posiciones = posiciones;
      this.tamaño = tamaño;
      this.score = 0;
      this.direccion = "r";
    }
  }

  const snake = new Snake(["00", "01", "02", "03"], 3);
  const renderSnake = () => {
    snake.posiciones.forEach((posicion) => {
      const [p1, p2] = posicion.split("");
      board[p1][p2] = 1;
    });
  };

  const dibujar = () => {
    tablero.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 2) {
          tablero.innerHTML += `<div class="food"></div>`;
        } else if (board[i][j] === 1) {
          tablero.innerHTML += `<div class="snake"></div>`;
        } else if (board[i][j] === 0) {
          tablero.innerHTML += `<div class="casilla"></div>`;
        }
      }
    }
  };

  let x, y;

  const renderFood = () => {
    if (x !== undefined && y !== undefined && board[x][y] === 2) {
      board[x][y] = 0;
    }
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    if (vacio[x][y] === 0) {
      board[x][y] = 2;
    }
  };
  renderFood();

  const limpiarSnakes = () => {};
  const move = (direccion) => {
      if(direccion==="r"){
        const [y, x] = snake.posiciones[snake.posiciones.length - 1].split("");
        board[snake.posiciones[0][0]][snake.posiciones[0][1]] = 0;
        x==="9" ? snake.posiciones.push(`${y}0`)  : snake.posiciones.push(`${y}${parseInt(x) + 1}`);
        snake.posiciones.splice(0, 1);
      }else if(direccion==="d"){
        const [y, x] = snake.posiciones[snake.posiciones.length - 1].split("");
        board[snake.posiciones[0][0]][snake.posiciones[0][1]] = 0;
        y==="9" ? snake.posiciones.push(`0${x}`)  : snake.posiciones.push(`${parseInt(y) + 1}${x}`);
        snake.posiciones.splice(0, 1);
      }else if(direccion==="u"){
        const [y, x] = snake.posiciones[snake.posiciones.length - 1].split("");
        board[snake.posiciones[0][0]][snake.posiciones[0][1]] = 0;
        x==="0" ? snake.posiciones.push(`9${x}`)  : snake.posiciones.push(`${parseInt(y) - 1}${x}`);
        snake.posiciones.splice(0, 1);
      }else if(direccion==="l"){
        const [y, x] = snake.posiciones[snake.posiciones.length - 1].split("");
        board[snake.posiciones[0][0]][snake.posiciones[0][1]] = 0;
        x==="0" ? snake.posiciones.push(`${y}9`)  : snake.posiciones.push(`${y}${parseInt(x) - 1}`);
        snake.posiciones.splice(0, 1);
      }
    
  };

  document.addEventListener("keyup",(e)=>{
      switch(e.keyCode){
          case 37 :  snake.direccion ="l";break;
          case 38 :  snake.direccion ="u";break;
          case 39 :  snake.direccion ="r";break;
          case 40 :  snake.direccion ="d";break;
      }
      
  })
  document.getElementById("start").addEventListener("click", () => {
    setInterval(() => {
      renderSnake();
      dibujar();
        move(snake.direccion);
    }, 100);
  });
});
