// Push de Servicios

const MARCA = "Chazki - Logística de Punta a Punta"
const BIENVENIDA = ("¡Bienvenido a la " + MARCA + "!");

console.log(MARCA);
alert(MARCA);

// Declaración de Variables y Constantes

let cantidadDivisaCompra = 0;

const IMPUESTO_PAIS = 0.30;
const IMPUESTO_GANANCIA = 0.45;

let inicio = 0;

let flecha = "--> ";
let espacio = ", ";

let fecha = new Date();

// Clase Constructora de Objeto (Cliente)

class Cliente {
    constructor(nombre, documentoidentidad, envios, correo) {
        this.nombre = nombre;
        this.documentoidentidad = documentoidentidad;
        this.envios = envios;
        this.correo = correo;
    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
}

// Ingreso de Datos del CLIENTE

let clienteUno = new Cliente(prompt("Ingrese Nombre Comercial o Razón social").toLocaleUpperCase(), prompt("Ingrese RUC o Documento de identidad").toLocaleUpperCase(), prompt("Ingrese Número de Envíos por Mes").toLocaleUpperCase(),  prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());

while ((clienteUno.nombre == "") || (clienteUno.documentoidentidad == "") || (clienteUno.envios == "") || ((clienteUno.correo).search("@") == -1)) {

    console.log("Por favor ingresar todos los campos solicitados");
    alert("Por favor ingresar todos los campos solicitados");

    clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese RUC o Documento de identidad").toLocaleUpperCase(),prompt("Ingrese Número de Envíos por Mes").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());
}
// Bienvenida Cliente

console.log(BIENVENIDA + " " + clienteUno.toString());
alert(BIENVENIDA + " " + clienteUno.toString());

// Creación de Array (Lista de Servicios Logísticos)

let listaOperaciones = ["1.- Servicio Express", "2.- Servicio Same Day", "3.- Servicio Next Day", "4.- Salir"];

// Selección de los servicios a solicitar

console.log(); ("En " + MARCA + ", " + "podrás realizar tus envíos a través de nuestros diferentes servicios: " + "\n\n" + listaOperaciones[0] + "\n" + listaOperaciones[1] + "\n" + listaOperaciones[2]);
alert("En nuestra " + MARCA + ", " + "podrás realizar tus envíos a través de nuestros diferentes servicios: " + "\n\n" + listaOperaciones[0] + "\n" + listaOperaciones[1] + "\n" + listaOperaciones[2]);


// Creación de Array con Objeto (Divisas)

class Servicios {
    constructor(simbolo, nombre, preciohasta3km, preciomasde3km) {
        this.simbolo = simbolo;
        this.nombre = nombre;
        this.preciohasta3km = preciohasta3km;
        this.preciomasde3km = preciomasde3km;
    }
    toString() {
        return this.nombre;
    }
}

let listaServicios = [];

listaServicios.push(new Servicios("PEN S/", "Express", 5.0, 15));
listaServicios.push(new Servicios("PEN S/", "Same Day", 4.50, 8.5));
listaServicios.push(new Servicios("PEN S/", "Next Day", 4.50, 5.5));

// Creación de Funciones sin Parámetros

// MEJORADO
function elegirOperacion() {

    let operacion = parseInt(prompt("¿Qué servicio requieres tomar? (Ingresa el número de la opción con el número de envíos que deseas realizar):" + "\n\n" + (listaOperaciones[0]) + "\n" + (listaOperaciones[1]) + "\n" + (listaOperaciones[2]) + "\n" + (listaOperaciones[3]) + "\n"));

    switch (operacion) {
        case 1:

            console.log("¡Consulta nuestro servicio según el tiempo de entrega deseado!");
            alert("¡Consulta nuestro servicio según el tiempo de entrega deseado!");
            consultaGeneral();
            volver();

            break;
        case 2:

            consulta("Rutas hasta 3km");
            tarifa();
            volver();

            break;
        case 3:

            consulta("Rutas más de 3km");
            Cargo();
            volver();

            break;
        case 4:

            volver();

            break;

        default:
            console.log("Puedes elegir un número entre 1 y 3");
            alert("Puedes elegir un número entre 1 y 3");
            elegirOperacion();
            break;
    }
}

// MEJORADO
function consultaGeneral() {
    console.log("El Precio Actual de las servicios es: ", "\n", fecha.toUTCString(), listaServicios[0], "\n", listaServicios[1], "\n", listaServicios[2], "\n");

    alert("El Precio Actual de los servicios es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + listaServicios[0].simbolo + espacio + listaServicios[0].nombre + espacio + " Tarifa Rutas hasta 3km": " + listaServicios[0].precioCompra + espacio + " Cargo Rutas hasta 3km: " + listaServicios[0].precioVenta + "\n\n" + flecha + listaServicios[1].simbolo + espacio + listaServicios[1].nombre + espacio + " Tarifa Rutas hasta 3km": " + listaServicios[1].precioCompra + espacio + " Cargo Rutas hasta 3km: " + listaServicios[1].precioVenta + "\n\n" + flecha + listaServicios[2].simbolo + espacio + listaServicios[2].nombre + espacio + " Cargo Rutas hasta 3km: " + listaServicios[2].precioCompra + espacio + " Tarifa Rutas mas de 3km: " + listaServicios[2].precioVenta + "\n\n" + flecha);
}


// LE FALTA LA ARROW FUNCTION
function compra() {

    let seleccionDivisaCompra = parseInt(prompt("¿Qué tipo de Divisa deseas comprar? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- " + (listaServicios[0].nombre) + "\n" + "2.- " + (listaServicios[1].nombre) + "\n" + "3.- " + (listaServicios[2].nombre) + "\n" + "4.- Volver al Inicio"));

    switch (seleccionDivisaCompra) {
        case 1:

            calcularCambioCompra("Soles", listaServicios[0].preciohasta3km);
            break;

        case 2:
            calcularCambioCompra("Soles", listaServicios[1].preciohasta3km);
            break;

        case 3:
            calcularCambioCompra("Soles", listaServicios[2].preciohasta3km);
            break;

        case 4:
            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 3");
            alert("Solo puedes elegir un número entre 1 y 3");
            compra();
            break;
    }
}

// MEJORADO
function venta() {

    let seleccionTarifaServicio = parseInt(prompt("¿Qué servicio requieres tomar? (Ingresa el número de la opción con el número de envíos que deseas realizar):" + "\n\n" + (listaServicios[0]) + "\n" + (listaServicios[1]) + "\n" + (listaServicios[2]) + "\n" + (listaServicios[3]) + "\n"));

    switch (seleccionDivisaVenta) {
        case 1:

            calcularCambioVenta("Soles", (listaServicios[0].preciomasde3km));
            break;

        case 2:
            calcularCambioVenta("Soles", (listaServicios[1].preciomasde3km));
            break;

        case 3:
            calcularCambioVenta("Soles", (listaServicios[2].preciomasde3km));
            break;

        case 4:
            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 3");
            alert("Solo puedes elegir un número entre 1 y 3");
            compra();
            break;
    }
}

// MEJORADO
function volver() {

    inicio = parseInt(prompt("¿Qué servicio requieres tomar? (Ingresa el número de la opción con el número de envíos que deseas realizar): " + "\n\n" + (("1.- Volver al Inicio").toString()) + "\n" + (("2.- Salir\n".toString()))));

    switch (inicio) {
        case 1:
            break;

        case 2:
            break;

        default:
            console.log("Solo puedes elegir entre 1 y 2");
            alert("Solo puedes elegir entre 1 y 2");
            volver();
            break;
    }

}

// DEFINITIVO
function salida() {
    console.log("Gracias por preferir a " + MARCA + ". Será hasta una próxima ocasión. ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + ". Será hasta una próxima ocasión. ¡Hasta Luego!");
}




// Creación de Array con Objeto (Stock de Divisas)

class stockDivisa {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    toString() {
        return this.nombre;
    }
}

let stockDivisas = [];

stockDivisas.push(new stockDivisa("Dólar", 20000));
stockDivisas.push(new stockDivisa("Euro", 15000));
stockDivisas.push(new stockDivisa("Real", 50000));
stockDivisas.push(new stockDivisa("Peso Chileno", 100000));
stockDivisas.push(new stockDivisa("Peso Uruguayo", 60000));
stockDivisas.push(new stockDivisa("Franco Suizo", 10000));
stockDivisas.push(new stockDivisa("Libra Esterlina", 5000));
stockDivisas.push(new stockDivisa("Sol Peruano", 150000));




// Creación de Funciones con Parámetros

function consulta(nombreConsulta) {

    let dolarTasa = "";
    let euroTasa = "";
    let realTasa = "";
    let pesoChilenoTasa = "";
    let pesoUruguayoTasa = "";
    let francoTasa = "";
    let libraTasa = "";
    let solTasa = "";

    let fecha = new Date();
    let flecha = "--> ";

    if (nombreConsulta === "Compra") {

        dolarTasa = listaDivisas[0].precioCompra;
        euroTasa = listaDivisas[1].precioCompra;
        realTasa = listaDivisas[2].precioCompra;
        pesoChilenoTasa = listaDivisas[3].precioCompra;
        pesoUruguayoTasa = listaDivisas[4].precioCompra;
        francoTasa = listaDivisas[5].precioCompra;
        libraTasa = listaDivisas[6].precioCompra;
        solTasa = listaDivisas[7].precioCompra;

    } else {

        dolarTasa = listaDivisas[0].precioVenta;
        euroTasa = listaDivisas[1].precioVenta;
        realTasa = listaDivisas[2].precioVenta;
        pesoChilenoTasa = listaDivisas[3].precioVenta;
        pesoUruguayoTasa = listaDivisas[4].precioVenta;
        francoTasa = listaDivisas[5].precioVenta;
        libraTasa = listaDivisas[6].precioVenta;
        solTasa = listaDivisas[7].precioVenta;
    }

    console.log("El precio de las Divisas para la " + nombreConsulta + " es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + ("Dólar = " + dolarTasa.toString() + " AR $ por Dólar.") + "\n" + flecha + ("Euro = " + euroTasa.toString() + " AR $ por Euro.") + "\n" + flecha + ("Real = " + realTasa.toString() + " AR $ por Real.") + "\n" + flecha + ("Peso Chileno = " + pesoChilenoTasa.toString() + " AR $ por Peso Chileno.") + "\n" + flecha + ("Peso Uruguayo = " + pesoUruguayoTasa.toString() + " AR $ por Peso Uruguayo.") + "\n" + flecha + ("Franco = " + francoTasa.toString() + " AR $ por Franco.") + "\n" + flecha + ("Libra Esterlina = " + libraTasa.toString() + " AR $ por Libra Esterlina.") + "\n" + flecha + ("Sol = " + solTasa.toString() + " AR $ por Sol Peruano."));

    alert("El precio de las Divisas para la " + nombreConsulta + " es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + ("Dólar = " + dolarTasa.toString() + " AR $ por Dólar.") + "\n" + flecha + ("Euro = " + euroTasa.toString() + " AR $ por Euro.") + "\n" + flecha + ("Real = " + realTasa.toString() + " AR $ por Real.") + "\n" + flecha + ("Peso Chileno = " + pesoChilenoTasa.toString() + " AR $ por Peso Chileno.") + "\n" + flecha + ("Peso Uruguayo = " + pesoUruguayoTasa.toString() + " AR $ por Peso Uruguayo.") + "\n" + flecha + ("Franco = " + francoTasa.toString() + " AR $ por Franco.") + "\n" + flecha + ("Libra Esterlina = " + libraTasa.toString() + " AR $ por Libra Esterlina.") + "\n" + flecha + ("Sol = " + solTasa.toString() + " AR $ por Sol Peruano."));

}



// FALTA ARREGLAR LA ARROW FUNCTION
function calcularCambioCompra(nombreDivisa, tasaCambio) {

    do {

        cantidadDivisaCompra = prompt("Ingrese la cantidad expresada en números de la Divisa que deseas comprar (Puedes usar decimales):");

        if (isNaN(cantidadDivisaCompra)) {
            console.log("Solo puedes Ingresar un número");
            alert("Solo puedes Ingresar un número");
        }

    } while (isNaN(cantidadDivisaCompra));

    console.log("Quieres Comprar " + cantidadDivisaCompra + " " + nombreDivisa);
    alert("Quieres Comprar " + cantidadDivisaCompra + " " + nombreDivisa);




    // Aquí debería ir la Función comentada (menorQue)




    let subTotalCompra = cantidadDivisaCompra * tasaCambio;
    console.log("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
    alert("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");

    let subTotalPaisCompra = subTotalCompra * IMPUESTO_PAIS;
    let subTotalGananciaCompra = subTotalCompra * IMPUESTO_GANANCIA;
    let totalCompra = subTotalCompra + subTotalPaisCompra + subTotalGananciaCompra;

    console.log("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());
    alert("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());

    console.log("Gracias por preferir a " + MARCA);
    alert("Gracias por preferir a " + MARCA);

}




// FALTA ARREGLAR LA ARROW FUNCTION
function calcularCambioVenta(nombreDivisa, tasaCambio) {

    do {

        cantidadDivisaVenta = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));

        if (isNaN(cantidadDivisaVenta)) {
            console.log("Solo puedes Ingresar un número");
            alert("Solo puedes Ingresar un número");
        }

    } while (isNaN(cantidadDivisaVenta));


    console.log("Quieres Vender " + cantidadDivisaVenta + " " + nombreDivisa);
    alert("Quieres Vender " + cantidadDivisaVenta + " " + nombreDivisa);

    let subTotalVenta = cantidadDivisaVenta * tasaCambio;
    console.log("El detalle de la operación es: \n" + "AR $ " + subTotalVenta.toString());
    alert("El detalle de la operación es: \n" + "AR $ " + subTotalVenta.toString());


    console.log("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEn total recibirás AR $" + subTotalVenta.toString());
    alert("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEn total recibirás AR $" + subTotalVenta.toString());

    console.log("Gracias por preferir a " + MARCA);
    alert("Gracias por preferir a " + MARCA);

}



// Llamado a la Función (Elegir Operación)

elegirOperacion();

while (inicio !== 2) {

    elegirOperacion();

}



// Llamado a la Función (Salida)

salida();