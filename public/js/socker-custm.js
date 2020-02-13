var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Santiago',
    mensaje: 'Hola mundo'
}, (resp) => {
    console.log('respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});