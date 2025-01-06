
//Carrousel

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

// // Boton Subir

// $(document).ready(function(){
 
// 	$('.subir').click(function(){
// 		$('body, html').animate({
// 			scrollTop: '0px'
// 		}, 500);
// 	});
 
// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0 ){
// 			$('.subir').slideDown(500);
// 		} else {
// 			$('.subir').slideUp(500);
// 		}
// 	});
 
// });

//Formulario Contacto

const form = document.getElementById("form");
const nameInput = document.getElementById("nombre");
const empresaInput = document.getElementById("empresa");
const telefonoInput = document.getElementById ("telefono");
const emailInput =  document.getElementById ("correo");


const checkUsername = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    const username = nameInput.value.trim();

    //Verificar si el campo esta correcto
  if(isEmpty(username)){
      showError(nameInput,"El nombre es necesario")
     } else if(!isBetween(username.length, min, max)) {
        showError(nameInput, `El nombre debe tener entre ${min} y ${max} caracteres`)
         } else {
            showSuccess(nameInput);
             valid = true; 
             }
    return valid
}

const checkEmail = () =>{
    let valid = false;
    const emailValue = emailInput.value.trim();
    if(isEmpty(emailValue)){
        showError(emailInput, 'El mail es obligatorio');
    } else if(!isEmailValid(emailValue)){
        showError(emailInput, 'El mail no es valido');
        }  else {
            showSuccess(emailInput);
            valid = true;
             }
    return valid     
} 

const checkPhone = () => {
    let valid = false;
    const phoneValue = telefonoInput.value.trim();
    if(!isPhoneValid(phoneValue)) {
      showError(telefonoInput, 'El telefono ingresado es invalido')
    } else {
      showSuccess(telefonoInput);
      valid = true;
    }
    return valid
  }

const isEmailValid = (email) => {
    const reg =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    return reg.test(email)
}

const isPhoneValid = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone)
  }

//funcion para validar campo vacio
const isEmpty = (value) => value === "";

const isBetween = (length,min, max) => length < min || length > max ? false : true;

//funcion par mostrar error

const showError = (input, message) => {
    const formfield = input.parentElement;
    //  formfield.classlist.remove("success")
    //  formfield.classList.add("error")
      const error = formfield.querySelector("small");
       error.textContent = message;
}

const showSuccess = (input) => {
     const formfield = input.parentElement;
    //   formfield.classlist.remove("error")
    //   formfield.classlist.add("success")
       const error = formfield.querySelector("small");
       error.textContent= "";
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // guardar el estado de los inputs en variables
    let isUsernameValid = checkUsername();
    let isEmailValid = checkEmail();
        let isPhoneValid = checkPhone();
  
    console.log('isUsernameValid ==>',isUsernameValid)
    console.log('isEmailValid ==>',isEmailValid)
        console.log('isPhoneValid ==>',isPhoneValid)
  
    let isFormValid = isUsernameValid && isEmailValid && isPhoneValid;
  
    if(isFormValid){
      form.submit();
      form.reset ();
    }  
  })

   //Funcion enviar formulario
   const $form = document.querySelector('#form')
   const $buttonMailto = document.querySelector('#sendform')

   $form.addEventListener('submit', handleSubmit)
   
   function handleSubmit(){
    const form = new FormData(this)
    console.log(form.get('name'))
    

    //$buttonMailto.setAttribute('href', 'mailto:adan.lacuadra1@gmail.com?subject=${form.get('name')}${form.get('email')} &body=${form.get('empresa')}&body=${form.get('tel')}&body=${form.get('message')}')
    $buttonMailto.click()
   }
// Fin Formulario de contacto

//Carrousel

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())
  
setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0;
let counter =0;
let widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform =`translate(-${operacion}%)`;
        slider.style.transition = "none"
        }
     else {
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
         }
 }

function moveToLeft() {
    counter--;
    if (counter<0) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
        }
    else { 
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    }    
    
}




//boton ver mas 1
let hidetext_btn1 = document.getElementById ('hidetext_btn1');

let hidetext1 = document.getElementById ('hidetext1');

hidetext_btn1.addEventListener('click', toggletext);

function toggletext (){
    hidetext1.classList.toggle('show1');

if(hidetext1.classList.contains('show1')){
    hidetext_btn1.innerHTML='Ver Menos';
   }
else{
    hidetext_btn1.innerHTML='Ver Mas';
    }
}

//boton ver mas 2
let hidetext_btn2 = document.getElementById ('hidetext_btn2');

let hidetext2 = document.getElementById ('hidetext2');

hidetext_btn2.addEventListener('click', toggletext2);

function toggletext2 (){
    hidetext2.classList.toggle('show2');

if(hidetext2.classList.contains('show2')){
    hidetext_btn2.innerHTML='Ver Menos';
   }
else{
    hidetext_btn2.innerHTML='Ver Mas';
    }
}

//boton ver mas 3
let hidetext_btn3 = document.getElementById ('hidetext_btn3');

let hidetext3 = document.getElementById ('hidetext3');

hidetext_btn3.addEventListener('click', toggletext3);

function toggletext3 (){
    hidetext3.classList.toggle('show3');

if(hidetext3.classList.contains('show3')){
    hidetext_btn3.innerHTML='Ver Menos';
   }
else{
    hidetext_btn3.innerHTML='Ver Mas';
    }
}