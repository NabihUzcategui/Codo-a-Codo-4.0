//** Formulario - Nabih U.- */
const formulario = document.querySelector("#formulario");
const buttonMailTo = document.querySelector("#send-mail");

//Crear el evento
formulario.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const form = new FormData(this);

  buttonMailTo.setAttribute(
    "href",
    `mailto:nabihuzcateguip@gmail.com?subject=
        Mensaje enviado desde mi sitio web por: ${form.get("fullname")}
        Correo: ${form.get("email")}
        &body=
        Nombre: ${form.get("fullname")}
        Correo: ${form.get("email")}
        Teléfono: ${form.get("phone")}
        Asunto: ${form.get("affair")}
        mensaje: ${form.get("message")}`
  );

  buttonMailTo.click();
}


//** API leaflet - Mapa */
const tilesProvider = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

let myMap = L.map("myMap").setView([-34.60276203812859, -58.403056090797016], 11);

L.tileLayer(tilesProvider, {
  maxZoom: 20,
}).addTo(myMap);

let marker = L.marker([-34.60276203812859, -58.403056090797016]).addTo(myMap);

/*Validaciones formulario*/
/*Validaciones formulario
Las validaciones son:
- El string de "Nombre completo" NO debe contener numeros o caracteres especiales
- Se debe cumplir con el formato de correo
- El campo "Telefono" solo debe permitir numeros
- El asunto no puede tener más de 20 caracteres
*/

const inputs = document.querySelectorAll('#formulario input'); //almacena las entradas en un arreglo

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
	affair: /^[a-zA-ZÀ-ÿ\s]{5,20}$/ //Limita la cantidad de caracteres
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "fullname":
			validarCampo(expresiones.name, e.target, 'fullname');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');			
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
		break;
		case "affair":
			validarCampo(expresiones.affair, e.target, 'affair');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`group_${campo}`).classList.remove('group_form-incorrecto');
		document.getElementById(`group_${campo}`).classList.add('group_form-correcto');
		document.querySelector(`#group_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#group_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group_${campo} .error_message`).classList.remove('error_message_activo');
	}else{
		document.getElementById(`group_${campo}`).classList.add('group_form-incorrecto');
		document.getElementById(`group_${campo}`).classList.remove('group_form-correcto');
		document.querySelector(`#group_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#group_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group_${campo} .error_message`).classList.add('error_message_activo');
	}
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario) //valida cuando se levanta la tecla
    input.addEventListener('blur', validarFormulario)
});

//cuando presiona el boton enviar no sucede nada, no envia los datos 
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});