console.log("Estamos conectados...");


alert('Bienvenidos a Clínica Salud Total - Servicios Médicos');

function solicitarContraseña() {
    const password = prompt("Ingresa tu contraseña:");

    if (password === "salud") {
        alert("Acceso concedido.");
        return true;
    } else {
        alert("Acceso denegado. Por favor, intentalo nuevamente.");
        return false;
    }
}

const accesoPermitido = solicitarContraseña(); // verdadero

if (accesoPermitido) {
    function opcionServicio() {
        const opcion1 = "1- Consulta General";
        const opcion2 = "2- Examen de Laboratorio";
        const opcion3 = "3- Consulta Especializada";
        const opcion4 = "4- Atención de Urgencias";
        const opcion5 = "5- Rehabilitación Física";
        const opcion6 = "6- Psicoterapia";
        const opcion7 = "7- Cirugía Ambulatoria";

        const opcionUsuario = prompt(`Por favor, tipea el número de la opción que quieras elegir:\n${opcion1}\n${opcion2}\n${opcion3}\n${opcion4}\n${opcion5}\n${opcion6}\n${opcion7}`);

        switch (parseFloat(opcionUsuario)) {
            case 1:
                confirm("Consulta General fue seleccionada exitosamente ¡Muchas gracias por elegirnos!");
                break;
            case 2:
                confirm("Examen de Laboratorio fue seleccionado exitosamente ¡Gracias por tu preferencia!");
                break;
            case 3:
                confirm("Consulta Especializada fue seleccionada exitosamente ¡Nos vemos pronto!");
                break;
            case 4:
                confirm("Atención de Urgencias fue seleccionada exitosamente ¡Esperamos ayudarte pronto!");
                break;
            case 5:
                confirm("Rehabilitación Física fue seleccionada exitosamente ¡Te esperamos pronto!");
                break;
            case 6:
                confirm("Psicoterapia fue seleccionada exitosamente ¡Gracias por confiar en nosotros!");
                break;
            case 7:
                confirm("Cirugía Ambulatoria fue seleccionada exitosamente ¡Te deseamos una pronta recuperación!");
                break;
            default:
                alert("Opción inválida. Por favor, selecciona una opción válida del menú.");
                break;
        }
    }

    opcionServicio();
}

let opcionesDeServicios = [
    "consulta general",
    "examen de laboratorio",
    "consulta especializada",
    "atención de urgencias",
    "rehabilitación física",
    "psicoterapia",
    "cirugía ambulatoria"
];
