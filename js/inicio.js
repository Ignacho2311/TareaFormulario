define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var formulario = document.getElementById("formulario");
    var inputNombre = document.getElementById("nombrecompleto");
    var inputRut = document.getElementById("rut");
    var inputCorreo = document.getElementById("correo");
    var inputTelefono = document.getElementById("telefono");
    function validar_checkbox() {
        var _a;
        var inputLenguajes = (_a = document.getElementById("lenguajes")) === null || _a === void 0 ? void 0 : _a.children;
        var e;
        var i = 0;
        var al_menos_uno = false;
        while (i < inputLenguajes.length) {
            if (inputLenguajes[i].tagName === 'INPUT' && inputLenguajes[i].type === 'checkbox') {
                if (inputLenguajes[i].checked) {
                    al_menos_uno = true;
                }
            }
            i++;
        }
        if (!al_menos_uno) {
            window.alert("Selecciona al menos un checkbox");
            if (e.preventDefault()) {
                e.preventDefault();
            }
            else {
                e.returnDefault = false;
            }
        }
    }
    function validar_radio() {
        var opcion1 = document.getElementById('opcion1');
        var opcion2 = document.getElementById('opcion2');
        var opcion3 = document.getElementById('opcion3');
        var flag = false;
        if (opcion1.checked || opcion2.checked || opcion3.checked) {
            flag = true;
        }
        else {
            window.alert("Seleccione un opcion");
        }
    }
    formulario.addEventListener("submit", function (event) {
        if (inputNombre.value === '' || inputRut.value === '' || inputCorreo.value === '' || inputTelefono.value === '' || validar_checkbox() || validar_radio()) {
            window.alert("INGRESO INCORRECTO");
        }
        else {
            window.alert("INGRESO CORRECTO");
            var mensaje = document.getElementById("mensaje");
            formulario.style.display = "none";
            mensaje.style.display = "block";
            mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
            mensaje.style.color = "black";
            event.preventDefault();
        }
    }, false);
    /*function validar_telefono(){
       let numero:any = document.getElementById("telefono");
       let flag=false
       if(numero.length === 9){
         flag=true;
       }else{
         window.alert("Debe ingresar un numero de 9 digitos")
       }
    } */
    function limpiarFormulario() {
        var _a;
        var limpiar = (_a = document.getElementById("formulario")) === null || _a === void 0 ? void 0 : _a.remove;
    }
});
