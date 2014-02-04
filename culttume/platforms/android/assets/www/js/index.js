var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
ster
        console.log('Received Event: ' + id);
    }
};

/*function validate_data(){
    if (document.formValidate.inputEmail.value.length == 0) {
        alert("Ingrese su nombre")
    }

    if (document.formValidate.inputPassword.value.length == 0){
        alert("Ingrese su contraseña")
    }

}

function form_regiter*/






