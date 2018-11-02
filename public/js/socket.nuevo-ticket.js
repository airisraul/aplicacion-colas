// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Usuario conectado');
});


socket.on('disconnect', function() {
    console.log('Usuario desconectado');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
})

$('button').on('click', function() {
    //console.log('click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
})