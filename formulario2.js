    
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById ('error');
    
    function validarNombre(e){
        if(nombre.value == ''|| nombre.value == null){
            console.log('por favor completa el nombre');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li>';

            e.preventDefault();

        } else {
            error.style.display = 'none';
        }

    function validarCorreo(e){
        if(correo.value == ''|| correo.value == null){
            console.log('por favor completa el correo');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el correo</li>';

            e.preventDefault();

        } else {
            error.style.display = 'none';
        }

    function validarsexo(e) {
        if(sexo.value == ''|| sexo.value == null){
            console.log('por favor elige el sexo');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>por favor elige el sexo</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }

    function validarFormulario(e) {
        validarNombre(e);
        validarCorreo(e);
        validarsexo(e);
    }

    formulario.addEventListener('submit', validarNombre);