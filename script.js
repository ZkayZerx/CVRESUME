// Detectar cuando las secciones entran en pantalla
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

// Modo oscuro con localStorage
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkModeToggleBtn = document.getElementById("dark-mode-toggle");

    // Función para alternar el modo oscuro y actualizar el texto del botón
    const toggleDarkMode = () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");

        // Guardar en localStorage
        localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");

        // Cambiar el texto del botón según el modo actual
        darkModeToggleBtn.textContent = isDarkMode ? "Modo Claro✨" : "Modo Oscuro🌙";
    };

    // Verificar la preferencia guardada en localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggleBtn.textContent = "Modo Claro✨"; // Ajustar texto al cargar la página
    }

    // Asignar el evento al botón
    darkModeToggleBtn.addEventListener("click", toggleDarkMode);
});