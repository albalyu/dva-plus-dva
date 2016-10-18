$(document).ready(function () {
    $('.exersise').on('change', 'input', function (e) {
        //e.target.id
        alert(e.delegateTarget.id.substr(4) + ' ' + e.currentTarget.val);
    });
});
