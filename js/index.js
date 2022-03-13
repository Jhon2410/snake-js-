window.addEventListener("load",()=>{
    const tablero = document.querySelector(".tablero");

    const board = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]

    class Snake {
        constructor(posiciones, tamaño){
            this.posiciones = posiciones;
            this.tamaño = tamaño;
            this.score = 0;
        }
    }

    const dibujar = (x,y)=>{
        tablero.innerHTML ="";
        for(let i = 0; i< 10; i++) {
            for(let j = 0; j < 10; j++) {
                if(i===x && j===y){
                    tablero.innerHTML += `<div class="food"></div>`

                }else{
                tablero.innerHTML += `<div class="casilla"></div>`

                }
            }
            
        }
    }
    let x,y;
    setInterval(()=>{
       x = Math.floor(Math.random() * 10)
       y = Math.floor(Math.random() * 10)
        dibujar(x,y)
        

    },1000)

})