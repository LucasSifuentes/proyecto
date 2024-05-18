document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.forms.login;
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var usuario = loginForm.elements.usuario.value;
      var contrasena = loginForm.elements.contrasena.value;
  
      if (
        (usuario === 'Cliente' && contrasena === 'Prueba') ||
        (usuario === 'Cliente1' && contrasena === 'Prueba1')
      ) {
        window.location.href = 'ingreso.html';
      } else {
        window.location.href = 'rechazo.html';
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.btn');
    boton.onclick = function() {
      window.location.href = 'login.html';
    };
});
