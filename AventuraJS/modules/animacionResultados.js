import { jugador } from "./datosJugador.js"; 

export function mostrarResultadosFinales() {
    const contenedor = document.querySelector("#final-container");

    if (!contenedor) {
        console.error("ERROR: No se encontró el contenedor #resultadoFinal");
        return;
    }

    contenedor.innerHTML = ""; // limpiar por si acaso

    // Determinar rango del jugador
    const rango = jugador.puntosTotales >= 300 ? "Veterano" : "Novato";

    // Crear la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-resultado");
    tarjeta.innerHTML = `
        <h2 class="titulo-final">¡Resultados finales!</h2>
        <p class="rango-final">Rango obtenido: <strong>${rango}</strong></p>
        <p class="puntos-finales">Puntos totales: <strong>${jugador.puntos}</strong></p>
    `;

    contenedor.appendChild(tarjeta);

    // Forzar reflow para que la animación funcione
    tarjeta.offsetWidth;

    // Activar animación
    tarjeta.classList.add("visible");

    // Lanzar confetti (solo cuando se muestra)
    lanzarConfetti();
}

// Efecto de confetti (solo en escena 6)
function lanzarConfetti() {
    const duration = 2 * 1000;  // 2 segundos
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 4,
            spread: 70,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
