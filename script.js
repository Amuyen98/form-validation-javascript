const submitFunction = (event) => {
    if (!validarFormulario()){
        event.preventDefault() //evitar actualizacion de la web
    }else{
        event.preventDefault()
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'eMail: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudios: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById("formulario").addEventListener("submit", submitFunction)//escucha el envío del form

function validarFormulario() {
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if (campo.value.length == "") {
            mostrarError(errorCampo, 'Este campo es Requerido.')
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este campo debe tener al menos 3 caracteres.")
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo)
        }
    });

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEMail')

    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email.value)) {
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'ingrese un correo válido.')
        validacionCorrecta = false
    }

    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad')

    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para registrarte.')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }

    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad')

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Selecciona tu actividad.')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad);
    }

    const estudios = document.getElementById('nivelEstudio');
    let errorEstudios = document.getElementById('errorEstudios')

    if (estudios.value == '') {
        mostrarError(errorEstudios, 'Selecciona tu nivel de estudios.')
        validacionCorrecta = false
    }else{
        ocultarError(errorEstudios);
    }

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los terminos y condiciones.')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta
}



const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "hidden";
}