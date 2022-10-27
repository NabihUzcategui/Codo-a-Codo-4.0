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