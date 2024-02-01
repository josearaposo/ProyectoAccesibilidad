

const bloque = document.querySelectorAll('.bloque');
const titulo = document.querySelectorAll('.pregunta');


titulo.forEach( (titulos, i )=>{
    titulo[i].addEventListener('mouseenter', ()=> {
    
        bloque.forEach( (bloques, i ) =>{
            bloque[i].classList.remove('activo');
        })
        bloque[i].classList.add('activo');
    })
})






