$(document).ready(function(){
	 $('#formRegister').validate({
        onclick: false,
        rules: {
            state: "required"
        },
        messages: {
            state: {
                required: "The State is required!"
            }
        },
        errorPlacement: function (error, element) {
            alert(error.text());
        },
        submitHandler: function (form) { // for demo
            alert('Los datos son invalidos'); // for demo
            return false; // for demo
        }
	});
});