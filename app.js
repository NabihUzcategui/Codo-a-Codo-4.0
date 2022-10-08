

const formulario = document.querySelector('#formulario');
const buttonMailTo = document.querySelector('#send-mail');

//Crear el evento 
formulario.addEventListener('submit', handleSubmit);


function handleSubmit(e) {

    e.preventDefault();

    const form = new FormData(this);

    buttonMailTo.setAttribute('href', `mailto:nabihuzcateguip@gmail.com?subject=
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
};
