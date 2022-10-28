//Validaciones formulario
/*Las validaciones son:
- El string de "Nombre completo" NO debe contener numeros o caracteres especiales
- Se debe cumplir con el formato de correo
- El campo "Telefono" solo debe permitir numeros
*/

const formulario = document.getElementById(formulario);
const inputs = document.querySelectorAll('#formulario inpu'); //almacena las entradas en un arreglo

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "fullname":
			if(expresiones.nombre.test(e.target.value)){
				document.querySelector('#group_fullname .error-message').classList.remove('error-message-activo')
			}else{
				document.querySelector('#group_fullname .error-message').classList.add('error-message-activo')
			}
		break;
		case "email":
			
		break;
		case "phone":
			
		break;
	}
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario) //valida cuando se levanta la tecla
    input.addEventListener('blur', validarFormulario)
});

//ver con el addEventListener de app por que tal vez se pisan
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});



