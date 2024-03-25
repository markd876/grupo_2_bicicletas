window.addEventListener('load', ()=>{
    let form = document.querySelector('form.formulario')
    let email = document.querySelector('#login_email')
    let password = document.querySelector('#login_password')
    form.addEventListener('submit',(e)=>{
        let errores = [];
       if (!(email.value)){   
        errores.push('debes completar el campo de email')
        console.log('vacio')
       }
       if (password.value == ''){
        errores.push('la contraseña esta vacia')
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
    

