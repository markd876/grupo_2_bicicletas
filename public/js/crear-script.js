window.addEventListener('load', ()=>{
    let form = document.querySelector('form.formulario')
    let nombre = document.querySelector('#productoNombre')
    let descripcion = document.querySelector('#productoDesc')
    let color = document.querySelector('#productoColor')
    let precio = document.querySelector('#productoPrecio')
    form.addEventListener('submit',(e)=>{
        let errores = [];
        if ( nombre.value == ''){
            errores.push('el nombre está vacio')
        } else if(nombre.value.length < 5){
            errores.push('el nombre debe tener mas de 5 caracteres')
        }
        if ( descripcion.value == ''){
            errores.push('la descripcion está vacia')
        } else if(descripcion.value.length < 20){
            errores.push('la descripcion debe tener al menos 20 caracteres')
        }

       if (!(color.value)){   
        errores.push('debes elegir un color')
        console.log('not color')
       }
       if (precio.value == ''){
        errores.push('debes ponerle precio a tu producto')
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