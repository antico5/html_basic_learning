
validarEntrada = () => {

    let entrada, mensajeSalida

    entrada = document.getElementById("numeroIngresado").value

    if (entrada > 1 && entrada < 10)
        mensajeSalida = "Input OK"
    else
        mensajeSalida = "Input not valid"

    document.getElementById("salida").innerHTML = mensajeSalida
}
