function validar_formulario() {
    // 1. Acceder a los controles del formulario
    var usr = document.getElementById('usrtxt') // Trae completo el objeto
    var ema = document.getElementById('ematxt')
    var pwd = document.getElementById('pwdtxt')
    var msg = '';
    // 2. Realizar las comprobaciones
    if(!usr.checkValidity())
        msg += 'Usuario inválido, debe tener mínimo 8 caracteres\n'
    if(!ema.checkValidity())
         msg += 'Email inválido, debe tener el formato username@domainname\n'
    if(!pwd.checkValidity())
        msg += 'Clave inválida, debe tener mínimo 8 caracteres\n'
    // 3. Notificar resultados
    if(msg=='')
        msg ='Todo Bien, Todo Bien'
    alert(msg)    // Sería preferible un área de notificacion
    window.status = msg;
}

function revelar(sw) {
    // Acceder a los elementos de formulario
    var pwd = document.getElementById('pwdtxt')
    var ojo = document.getElementById('eyeimg')
    if(sw) {
        pwd.type='text'
        ojo.src = "media/ocultar.png"
    }
    else {
        pwd.type='password'
        ojo.src = "media/mostrar.png"
    }
}