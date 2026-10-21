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
1//.  Buscamos el nuevo boton de la API y le agregamos un evento de clic
    const botonApi= document.getElementById('apiBtn');
    botonApi.addEventListener('click', function() {
        // Lógica para buscar consejo web
        mensajeSalida.classList.remove('mensaje-oculto'); // Aseguramos que el mensaje esté visible antes de mostrar uno nuevo
        mensajeSalida.classList.add('mensaje-salida'); // <-- ¡Esta línea es la que faltaba activar!
        mensajeSalida.style.color = "#38bdf8";
        mensajeSalida.style.borderColor = "#38bdf8";
        mensajeSalida.textContent = "Conectando con el servidor...";

        // Hacemos la solicitud a la API con fetch
        fetch('https://api.adviceslip.com/advice')
            .then(respuesta => respuesta.json()) // Convertimos la respuesta a JSON para que lo entienda JavaScript
            .then(datos => {
                //Extraemmos el texto del consejo de la respuesta de la API y lo mostramos en el mensaje de salida o sea tarjerta
                const consejoSAleatorio = datos.slip.advice;
                mensajeSalida.textContent = "Consejo web: " + consejoSAleatorio;
            });
            .catch(error => {
                // En caso de error, mostramos un mensaje de error en la tarjeta
                mensajeSalida.style.color = "#f87171";
                mensajeSalida.style.borderColor = "#f87171";
                mensajeSalida.textContent = "Error al conectar con el servidor.";
            });