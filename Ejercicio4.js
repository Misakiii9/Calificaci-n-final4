function calcularCalificacionFinal() {

    // Obtener las califis
    let parcial1 = parseFloat(document.getElementById('parcial1').value);
    let parcial2 = parseFloat(document.getElementById('parcial2').value);
    let parcial3 = parseFloat(document.getElementById('parcial3').value);
    let examenFinal = parseFloat(document.getElementById('examenFinal').value);
    let trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);
    
    
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examenFinal) || isNaN(trabajoFinal)) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa valores válidos para todas las calificaciones.";
        return;
    }

    
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    
    
    let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

   
    document.getElementById('resultado').innerHTML = `
        <p>Promedio de parciales: ${promedioParciales.toFixed(2)}</p>
        <p>Calificación final: ${calificacionFinal.toFixed(2)}</p>
    `;
}