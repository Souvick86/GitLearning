$("#Generate").on('click', function() {
    var inputValue = $('#input').val();

    try {
        // Generate the QR code and display it
        var qrcode = new QRCode(document.getElementById('qrHolder'), {
            text: inputValue,
            width: 128,
            height: 128,
        });

        // qrcode.toFile(inputValue, [options], [cb(error)])

    } catch (error) {
        console.log(`Error: ${error}`)
    };

});

$('#Delete').on('click', function() {
    $('#qrHolder').empty();
});
