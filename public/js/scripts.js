$(document).ready(function () {
    $('.exersise').on('change', 'input', function (e) {
        var val = e.currentTarget.value;
        $('#'+e.delegateTarget.id).html('<span>'+val+'</span>');
        //e.target.id
        //alert(e.delegateTarget.id.substr(4) + ' ' + e.currentTarget.value);
        $('#'+e.delegateTarget.id).append($('<span style="color:red; font-size: 25px; font-weight: bold">+</span>'))
    });
});
