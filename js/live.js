const enlaces = document.querySelectorAll('.cont-grupo-imagenes .a');
const lightbox = document.querySelector('.ligthbox');
const grande = document.querySelector('.grande');

enlaces.forEach((enlace , n) => {
    enlaces[n].addEventListener('click', (e)=>{
        e.preventDefault();
        let ruta = enlace.querySelector('.img').src;
        console.log(ruta);

        lightbox.classList.add('activo');
        grande.setAttribute('src', ruta);
    })
})

grande.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');
    grande.setAttribute('src', "");
})