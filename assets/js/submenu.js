
/**para ocultar el submenu al clickear */
// Obtener el elemento del menú principal
const submenuItems = document.querySelectorAll('.desplegable_link a');

// const menu = document.querySelector('.nav_links');
const checkbox = document.getElementById('check');
// Agregar un evento de clic a cada elemento del menú principal
submenuItems.forEach(submenuItem => {
  submenuItem.addEventListener('click', () => {
    // Ocultar el menú
      if(checkbox.checked){
          checkbox.checked = false;
      }else{
          checkbox.checked = true;
      }
       
      
    // const icono = document.querySelector(".icono_menu div");
    // icono.classList.add("oculto");
    // icono.classList.remove("::after");
    // location.reload();     
  });
});
