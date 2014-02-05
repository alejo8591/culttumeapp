$(document).ready(function(){
	$(function(){

		$('#submitRegister').bind('click', function(){
			
			var email = $('#emailRegister').val();
			var password = $('#passwordRegister').val();
			
			window.localStorage.setItem("emailRegister", email);
			window.localStorage.setItem("passwordRegister", password);	
		});

       $('#formRegister').validate({
       	   onclick: false,
           rules: {

	           'emailRegister': {required: true , email: true},
	           'passwordRegister': {required: true, minlength: 8}
            },
       		messages: {

	           //'emailRegister': { required: 'Debe ingresar un correo electrónico', email: 'Debe ingresar el correo electrónico con el formato correcto' },
	           'emailRegister': 'Debe Ingresar un correo electronico',
	           'passwordRegister': 'Debe ingresar una contraseña minimo de  8 caracteres'
       		},

       		errorPlacement: function (error, element) {
            	alert(error.text());
        	},

       		//debug: true,
       		submitHandler: function(form){
           		alert('Los datos se han guardado correctamente');
           		return false;
       		}
    	});
	});
});