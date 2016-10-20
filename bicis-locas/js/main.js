function validateForm(){
	/* Escribe tú código aquí */
	var formulario = getElementsByTagName('formulario')[],
		elementos = formulario.elements,
		boton = documents.getElementsById('btn');

	var validarNombre = function(e){
		if (formulario.nombre.value == 0){
			alert("Completa eln campo nombre");
			e.preventDefault();
		}
	};

	var validarRadio = function(){
		if (formulario.email[0].checked == true || formulario.email[1].checked == true) {
		}else{
			alert("Completa el campo email");
			e.preventDefault();
		}
	}
	var validarCheckBox = funcion(e){
		if (formularios.terminos.checked == false){
			alert("Acepta los terminos");
			e.preventDefault();
		}
	}

	var validar = function(e){
		validarNombre(e);
		validarRadio(e);
		validarCheckBox(e);
	};	

	formulario.addEventsListener("submit", validar);

}())



