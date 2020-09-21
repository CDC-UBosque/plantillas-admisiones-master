( function( $ ) {

    'use strict';

    $(function() {

        $('#form_details').submit(function(event) {
            var form_email = $('input[name=form_email]').val().trim();
            var form_password = $('input[name=form_password]').val();
            var form_confirmpassword = $('input[name=form_confirmpassword]').val();
            var form_nombre = $('input[name=form_nombre]').val();
            var form_apellido = $('input[name=form_apellido]').val();
            var form_id = $('select[name=form_id]').val();
            var form_id = $('input[name=form_numid]').val();
            var form_tel = $('input[name=form_tel]').val();


            $(".error").remove();

            if (form_email.length < 1) {
              $('input[name=form_email]').after('<span class="error">Por favor ingrese un correo electrónico para contactarlo</span>');
            } else {
                var at_position = form_email.indexOf("@");
                var end_position = form_email.lastIndexOf("@");
                var dot_position = form_email.lastIndexOf(".");
                var regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                var validEmail = regEx.test(form_email);
                if (!validEmail) {
                    $('input[name=form_email]').after('<span class="error">Ingrese un correo electrónico válido</span>');                   
                }
                if (at_position < 1) {
                    $('input[name=form_email]').after('<span class="error">Ingrese un correo electrónico válido</span>');                    
                }
                if (at_position < 1 || end_position > at_position ||
                    dot_position < at_position + 2 || 
                    dot_position + 2 >= form_email.length
                ) {
                    $('input[name=form_email]').after('<span class="error">Ingrese un correo electrónico válido</span>');                 
                }
            }
            if (form_password.length < 1) {
              $('input[name=form_password]').after('<span class="error">Por favor ingrese una contraseña</span>');
            }
            if (form_confirmpassword.length < 1) {
              $('input[name=form_confirmpassword]').after('<span class="error">Por favor repita la contraseña</span>');
            }
            if (form_nombre.length < 1) {
              $('input[name=form_nombre]').after('<span class="error">Por favor ingrese su Nombre</span>');
            }
            if (form_nombre.length < 1) {
              $('input[name=form_apellido]').after('<span class="error">Por favor ingrese su Apellido</span>');
            }
            if (form_id.length  == "") {
              $('input[name=form_id]').after('<span class="error">Por favor seleccione el tipo de documento</span>');
            }
            if (form_nombre.length < 1) {
              $('input[name=form_apellido]').after('<span class="error">Por favor ingrese su Apellido</span>');
            }
            if (form_tel.length < 1) {
              $('input[name=form_tel]').after('<span class="error">Por favor ingrese un télefono para contactarlo</span>');
            }
            
            if ($(".error").length > 1) {
                return false;
            }
        });

    });

} )( jQuery );
