const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-nav');
const hamburguer1 = document.querySelector('.hamburguer');


/* cada vez que toque el menu se agrega o se quita la clase */
hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread")
})


/* para que se cumpla tengo que clickear la clase spread
y tiene que ser distinto al menu y al hamburguer */
window.addEventListener('click', (e) => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {

        menu.classList.toggle("spread")
    }
})


/* LIGHTBOX */

const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))


    })
})

/* si le doy click a cualquier cosa menos a "imagenesLight" se va a cerrar el lightbox */
contenedorLight.addEventListener('click', (e) =>{
    if(e.target != imagenesLight)
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '1'
} )


