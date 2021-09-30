import jquery=require('jquery');

const $:JQueryStatic=jquery;
// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  
  let formulario:any=document.getElementById("formulario");
  let inputNombre:any = document.getElementById("nombrecompleto");
  let inputRut:any = document.getElementById("rut");
  let inputCorreo:any = document.getElementById("correo");
  let inputTelefono:any = document.getElementById("telefono");


  function validar_checkbox(){
    let inputLenguajes:any = document.getElementById("lenguajes")?.children;
    let e:any;
    let i=0;
    let al_menos_uno = false;
    while(i<inputLenguajes.length){
      if(inputLenguajes[i].tagName === 'INPUT' && inputLenguajes[i].type === 'checkbox'){
        if (inputLenguajes[i].checked){
          al_menos_uno= true;
        }
      }
      i++;
    }
    if(!al_menos_uno){
      window.alert("Selecciona al menos un checkbox");
      if(e.preventDefault()){
        e.preventDefault();
      } else {
        e.returnDefault = false;
      }
    }
}


function validar_radio(){
    let opcion1:any = document.getElementById('opcion1')
    let opcion2:any = document.getElementById('opcion2')
    let opcion3:any = document.getElementById('opcion3')
    let flag=false;
    if(opcion1.checked || opcion2.checked || opcion3.checked){
      flag=true
    }else{
      window.alert("Seleccione un opcion");
    }
}



  formulario.addEventListener("submit", function(event:any){
    if(inputNombre.value === '' || inputRut.value === '' || inputCorreo.value=== '' || inputTelefono.value === '' || validar_checkbox()|| validar_radio()){
      window.alert("INGRESO INCORRECTO")
    }else{
      window.alert("INGRESO CORRECTO")
      let mensaje:any=document.getElementById("mensaje");
      formulario.style.display="none";
      mensaje.style.display="block";
      mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
      mensaje.style.color="black";
      event.preventDefault();
    } 
  } ,false)

  $("#limpiar").click(function(event:any) {
    $("#formulario")[0].remove();
  });

 /*function validar_telefono(){
    let numero:any = document.getElementById("telefono");
    let flag=false
    if(numero.length === 9){
      flag=true;
    }else{
      window.alert("Debe ingresar un numero de 9 digitos")
    }
 } */



