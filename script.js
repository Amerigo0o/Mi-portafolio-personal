// 1. Buscamos y guardamos los elementos de la página usando sus ID
const inputNombre = document.getElementById('nombreInput');
const botonEnviar = document.getElementById('enviarBtn');
const mensajeSalida = document.getElementById('mensajeSalida');

// 2. Le decimos al botón que "escuche" cuando el usuario haga clic en él
botonEnviar.addEventListener('click', function() {
    // Capturamos lo que el usuario escribió en el input
    const valorUsuario = inputNombre.value;

    mensajeSalida.classList.remove('mensaje-oculto'); // Aseguramos que el mensaje esté visible antes de mostrar uno nuevo
    mensajeSalida.classList.add('mensaje-salida'); // <-- ¡Esta línea es la que faltaba activar!

    // Validamos si el usuario escribió algo o está vacío
    if (valorUsuario.trim() === "") {
        mensajeSalida.style.color = "#f87171"; // Rojo para error
        mensajeSalida.style.borderColor = "#f87171"; // Rojo para error
        mensajeSalida.textContent = "No se te olvide escribrir algo velocista.";
        mensajeSalida.classList.remove('mensaje-oculto');
    } else {
        mensajeSalida.style.color = "#38bdf8"; // Azul de paz
        mensajeSalida.style.borderColor = "#38bdf8"; // Azul de paz
        mensajeSalida.textContent = "¡Hola, " + valorUsuario + "! Acabas de programar tu primera interacción con JavaScript.";
        // Mostramos un saludo personalizado con su texto
    }
});