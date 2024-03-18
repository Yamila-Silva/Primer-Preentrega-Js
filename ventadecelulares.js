let modelos = ["iPhone 13", "Samsung Galaxy S21", "Google Pixel 5"];
let precios = [999, 899, 699];
let cantidades = [10, 8, 5];
let total = 0;

let mostrarCatalogo = '';
for (let i = 0; i < modelos.length; i++) {
    mostrarCatalogo += "Modelo: " + modelos[i] + " - Precio: $" + precios[i] + " - Disponibles: " + cantidades[i] + "\n";
}

function comprarTelefono() {
    let comprar;
    let indexTelefonoQueQuiereComprar;

    while (true) {
        comprar = prompt("Ingrese el modelo del teléfono que desea comprar. Los modelos disponibles son:\n" + mostrarCatalogo + "Escriba el modelo elegido como aparece en pantalla");

        if (comprar === null) {
            alert("Usted no ingresó ningún dato.");
            return;
        }

        indexTelefonoQueQuiereComprar = modelos.indexOf(comprar);

        if (indexTelefonoQueQuiereComprar !== -1) {
            if (cantidades[indexTelefonoQueQuiereComprar] === 0) {
                alert("Lo siento, este modelo no está disponible en este momento.");
                continue;
            } else {
                break;
            }
        }

        alert("El modelo ingresado no está disponible en el catálogo.");
    }

    total += precios[indexTelefonoQueQuiereComprar];
    cantidades[indexTelefonoQueQuiereComprar]--;

    alert("El total de su carrito es de: $" + total + " y quedan " + cantidades[indexTelefonoQueQuiereComprar] + " unidades del modelo " + modelos[indexTelefonoQueQuiereComprar] + ".");

    let nueva = confirm('¿Quiere comprar otro celular?');
    switch (nueva) {
        case true:
            comprarTelefono();
            break;
        case false:
            alert("El total de la compra es: $" + total);
            return;
        default:
            alert("Por favor, seleccione una opción válida.");
            return;
    }
}

comprarTelefono();
