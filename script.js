
// Crea el objeto bird
let bird = {
    birdBottom: 500,
    div: document.querySelector(".bird"),
    dibujar: function(){
        bird.div.style.left = '250px'
        bird.div.style.bottom = bird.birdBottom + 'px'
    },
    mover: function(){
        bird.birdBottom +=40
        bird.div.style.bottom = bird.bottom + 'px'
    },
    colision: function(){
        if(bird.birdBottom < 0){
            return true
        }
    }
}


// Objeto juego
// No modifiques el código a partir de aquí *********
const juego = {
    timerId: 0,
    gravity: 2,
    efectoGravedad: function() {
        bird.birdBottom -= juego.gravity;
        bird.div.style.bottom = bird.birdBottom + "px";
    }, 

    aleatorio: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    verificaColision: function() {
       if (bird.colision()) {
        juego.terminar()
       } 
    }, 

    loop: function() {
        console.log("loop")
        juego.efectoGravedad()
        juego.verificaColision()
    },

    iniciar: function() {
        document.addEventListener("keyup", bird.mover)
        bird.dibujar()
        juego.timerId = setInterval(juego.loop, 20)
    },

    terminar: function() {
        console.log("terminar")
        clearInterval(juego.timerId)
    }
}

    juego.iniciar()