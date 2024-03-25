window.addEventListener('load', ()=>{
    let form = document.querySelector('form.formulario')
    let nombre = document.querySelector('#register_nombre')
    let apellido = document.querySelector('#register_apellido')
    let email = document.querySelector('#register_email')
    let password = document.querySelector('#register_password')
    form.addEventListener('submit',(e)=>{
        let errores = [];
        if ( nombre.value == ''){
            errores.push('el nombre está vacio')
        } else if(nombre.value.length < 3){
            errores.push('el nombre debe tener mas de 3 caracteres')
        }
        if ( apellido.value == ''){
            errores.push('el apellido está vacio')
        } else if(apellido.value.length < 3){
            errores.push('el apellido debe tener mas de 3 caracteres')
        }

       if (!(email.value)){   
        errores.push('debes completar el campo de email')
        console.log('vacio')
       }
       if (password.value == ''){
        errores.push('la contraseña esta vacia')
       } else if (password.value.length < 5){
        errores.push('la contraseña debe tener mas de 5 caracteres')
       }
       if(errores.length > 0){
        let ulErrores = document.querySelector('.errores ul');
        e.preventDefault();
            errores.forEach(error => { 
                ulErrores.innerHTML += "<li>" + error + "</li>"
            
            }) 
        }
       })
    })
    
