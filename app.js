// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
    // Muestra una ventana emergente con un mensaje
    var respuesta = prompt("Ingresar edad");
    
    // Redirige según la respuesta
    if (respuesta>=18) {
        // Si el usuario es mayor de edad, redirige a la página principal
    } else {
        // Si el usuario no es mayor de edad, puedes redirigirlo a una página de advertencia
        window.location.href = "https://www.google.com";
    }
}
mostrarVentanaEmergente();

const menu =document.querySelector('.hamburguesa');

const navegacion = document.querySelector('.navegacion');


document.addEventListener('DOMContentLoaded',()=>{
   eventos(); 
});

const eventos=()=>{
    menu.addEventListener('click',abrirmenu);
}
const abrirmenu=()=>{
    navegacion.classList.remove('ocultar');
    botoncerrar();
}
const botoncerrar =()=>{
   const cerrar = document.createElement('p');
   const overlay =document.createElement('div');
   overlay.classList.add('pantalla-completa');
   const body = document.querySelector('body');
   if(document.querySelectorAll('.pantalla-completa').length> 0)return;
   body.appendChild(overlay); 
   cerrar.textContent='x';
   cerrar.classList.add('botoncerrar');
   while (navegacion.children[4])
   {
    navegacion.removeChild(navegacion.children[4]);
   }
   navegacion.appendChild(cerrar);
   cerrarMenu(cerrar,overlay);
}
const cerrarMenu =(boton, overlay)=>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    });
    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}