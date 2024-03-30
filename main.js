// Función asíncrona para obtener los datos de la URL
async function obtenerAlbums() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Mostrar solo los primeros 20 títulos de álbumes
        datos.slice(0, 20).forEach((album) => console.log(album.title));
    } catch (error) {
        console.error(error);
    }
}

// Función que retorna una promesa después de 3 segundos
function enviarInformacion() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Información Enviada"), 3000);
    });
}

// Función asíncrona para recibir el mensaje de la promesa
async function mostrarInformacionEnviada() {
    const mensaje = await enviarInformacion();
    console.log(mensaje);
}

// Llamado a las funciones principales
obtenerAlbums();
mostrarInformacionEnviada();
