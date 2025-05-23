import './style.css'
let ciudadInput = document.querySelector("#ciudad");
ciudadInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") {
		fetchDataApi();
	}
});

let apiData = {
	url: "https://api.openweathermap.org/data/2.5/weather?q=",
	key: "18b7a696c3f85eeb0702be5cf1bd9af1",
};
ciudadInput.value = "Ezeiza";
fetchDataApi();
ciudadInput.value = "";


function fetchDataApi() {
	let ciudadBuscada = ciudadInput.value;
	fetch(`${apiData.url}${ciudadBuscada}&&appid=${apiData.key}&lang=es&units=metric`)
		.then((res) => res.json())
		.then((data) => DataDom(data));
}


let ciudadNombre = document.querySelector(".ciudad-nombre");
let fecha = document.querySelector(".fecha")
let cityTemp = document.querySelector(".temperatura");
let cityCond = document.querySelector(".condicion-clima");
let cityHumidity = document.querySelector(".humedad");
let velViento = document.querySelector(".viento")
function DataDom(data) {
	ciudadNombre.innerHTML = `${data.name}, ${data.sys.country}`;
    fecha.innerHTML = obtenerFecha();
	cityTemp.innerHTML = `${Math.round(data.main.temp)}°c`;
	cityCond.innerHTML = data.weather[0].description.toUpperCase();
	cityHumidity.innerHTML = `Humedad: ${data.main.humidity}%`;
	velViento.innerHTML = `Viento: ${data.wind.speed}km/h`;
}

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
             "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function obtenerFecha() {
	let fechaActual = new Date();
	let mes = meses[fechaActual.getMonth()];
	return `${fechaActual.getDate()} ${mes} ${fechaActual.getFullYear()}`;
}

console.log(obtenerFecha());
