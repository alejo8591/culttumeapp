$(document).ready(function(){
	$(function(){
       $('#formRegister').validate({
           rules: {
	           'userRegister': 'required',
	           'emailRegister': {required: true , email: true},
	           'confirmEmailRegister': {required: true , email: true},
	           'passwordRegister': 'required',
	           'confirmPasswordRegister': 'required'
           },
       		messages: {
	           'userRegister': 'Debe ingresar el nombre',
	           'emailRegister': { required: 'Debe ingresar un correo electrónico', email: 'Debe ingresar el correo electrónico con el formato correcto. Por ejemplo: u@localhost.com' },
	           'confirmEmailRegister':{ required: 'Debe ingresar un correo electrónico', email: 'Debe ingresar el correo electrónico con el formato correcto. Por ejemplo: u@localhost.com' },
	           'passwordRegister': 'Debe ingresar una contraseña',
	           'confirmPasswordRegister': 'Las contraseñas debe ser iguales'
       		},
       		debug: true,
       		submitHandler: function(form){
           		alert('El formulario ha sido validado correctamente!');
       		}
    	});
	});
});