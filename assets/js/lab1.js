$(document).ready(function(){
	$('#buttonMyName').bind('click', function(){
		
		var myName = $('#myName').val();

		window.localStorage.setItem("name", myName);

		$('#buttonMyName').append('<h2>' + myName + '</h2>');


		var myLastName = $('#myLastName').val();

		window.localStorage.setItem("lastName", myLastName);

		$('#buttonMyName').append('<h2>' + myLastName + '</h2>');

		
		var myPhone = $('#phone').val();

		window.localStorage.setItem("phone", myPhone);

		$('#buttonMyName').append('<h2>' + myPhone + '</h2>');


		var adress = $('#adress').val();

		window.localStorage.setItem("adress", adress);

		$('#buttonMyName').append('<h2>' + adress + '</h2>');
	});
});