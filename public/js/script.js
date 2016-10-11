$(document).ready(function(){

    $('.signin').click(function(){

        var form = $(this).parents('form');
        var sendingData = {
            login : form.find('input[name=login]').val(),
            password : form.find('input[name=password]').val()
        };
        var blocker = form.parents('.sign-container');

        $.ajax({

            url : form.attr('action'),
            method: form.attr('method'),
            dataType: 'json',
            data: JSON.stringify(sendingData),
            contentType: 'application/json',
            beforeSend: function(){
                blocker.block({
                   message: '<span><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Поиск пользователя ...</span>',
                   overlayCSS: {
                       backgroundColor: '#fff',
                       opacity: 0.8,
                       cursor: 'wait',
                   },
                   css: {
                       width: '70%',
                       border: 0,
                       padding: 0,
                       backgroundColor: 'none',
                       fontSize: '16px'
                   }
               });
            },
            success: function (response){
                blocker.unblock();
                var user = response.data;
                if (response.status) {
                    alertify.notify('Добро пожаловать ' + user.lastname + ' ' + user.firstname + ' перенаправление ...', 'success', 2, function() {
                        location.href = response.location;
                    });
                }
                else {
                    alertify.notify('Ошибка авторизации', 'error', 5);
                }
            }

        });

        return false;

    });

});