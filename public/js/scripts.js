$.ready(function () {
    $('.exersise').on('click', 'input', function () {
        alert(this.id);
    });
});
