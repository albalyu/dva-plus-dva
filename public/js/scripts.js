$(document).ready(function () {
    $('.exersise').on('click', 'input', function (e) {
        //e.target.id
        alert(e.delegateTarget.id);
    });
});
