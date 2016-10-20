// boton Español
var btnEsp = document.createElement("BUTTON");        // Crea un boton  
var t = document.createTextNode("Español");       // Crea un texto
btnEsp.appendChild(t);                                // Agrega el texto al boton  
document.body.appendChild(btnEsp);  				// Agrega el boton al body

//boton Ingles
var btnEn = document.createElement("BUTTON");        // Crea un boton
var t = document.createTextNode("Ingles");       // Crea un texto
btnEn.appendChild(t);                                // Agrega el texto al boton  
document.body.appendChild(btnEn);  				// Agrega el boton al body //funcion botones cambiar idioma

function cambiarIdioma(idioma) {
		var elTitulo = document.getElementById("form-signin-heading");
		var elEmail = document.getElementById("ingresoEmail");
		var elRemember = document.getElementById("remember");
		var elIngresarCta = document.getElementById("ingresarCta");

		if(idioma == "es") {
			elTitulo.innerHTML = "Ingresa a tu cuenta";
			elEmail.innerHTML = "Ingresa tu email";
			document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");
			elRemember.innerHTML = "Recordar contraseña";
		}
		else if(idioma == "en") {
			elTitulo.innerHTML = "Please sing in";
			elEmail.innerHTML = "Please enter your email";
			document.getElementById("inputPassword").setAttribute("placeholder","Password");
			elRemember.innerHTML = "Remeber me";
	}
}

//var btnEsp = document.getElementById("btnEs");
		btnEsp.onclick = function (){
		cambiarIdioma("es");
		}
//var btnEn = document.getElementById("btnEn");
		btnEn.onclick =	function () {
		cambiarIdioma("en");
		}