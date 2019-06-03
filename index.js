
$('#bell').click(() => {
    console.log('in click');
    socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
});