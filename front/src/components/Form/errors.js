export default (form) => {
    const errors = {}

    const regex1 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    const regex2 = /\w+@(gmail|hotmail|outlook|live)\.com(\.\w{2,3})*$/
    if(!regex2.test(form.mail)) {
        errors.mail = "Debe ingresar un email valido"
    }

    if(!form.mail) {
        errors.mail = "El campo no puede estar vacio"
    }

    if(form.mail.length > 35) {
        errors.mail = "El mail esta largo"
    }

    if(!(/\d+/.test(form.password))) {
        errors.password = "La contraseña debe tener al menos un número"
    }

   

    if(form.password.length < 6) {
        errors.password = "La contraseña en muy corta" 
    } else if(form.password.length > 10 ) {
        errors.password = "La contraseña en muy larga"
    }

  

    return errors
}