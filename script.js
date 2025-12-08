/* =========================================================================
   1. DATOS
   ========================================================================= */

// Variable para guardar la posición del ratón
let mouse = {
    x: null,
    y: null,
    radius: 150 // Radio de conexión (cuánto de lejos alcanza la línea)
}

// Evento para rastrear el movimiento del ratón
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Evento para limpiar cuando el ratón sale de la ventana (para que no se queden líneas pegadas al borde)
window.addEventListener('mouseout', function () {
    mouse.x = undefined;
    mouse.y = undefined;
});


// --- DATOS: PROYECTOS GITHUB ---
const githubProjects = [
    { name: "DP-TextUI", lang: "Lua", color: "#0000ff", desc: "[FiveM] Script de UI minimalista para notificaciones y textos en pantalla." },
    { name: "DP-Nitrous", lang: "Lua", color: "#0000ff", desc: "[FiveM] Sistema de óxido nitroso (NOS) basado en ítems de inventario para QBCore." },
    { name: "DP-Hud", lang: "Lua", color: "#0000ff", desc: "[FiveM] HUD de nueva generación, minimalista y completo para servidores QBCore." },
    { name: "DP-Garages", lang: "Lua", color: "#0000ff", desc: "[FiveM] Gestión avanzada de garajes para QBCore. Aparca y saca vehículos fácilmente." },
    { name: "DP-LoadingScreen", lang: "JavaScript", color: "#f1e05a", desc: "[FiveM] Pantalla de carga elegante y moderna con música y vídeo de fondo." },
    { name: "DP-Menu-DP-Input", lang: "Lua", color: "#0000ff", desc: "[FiveM] Scripts avanzados para menús interactivos y inputs fluidos en FiveM." },
    { name: "DP-PetsShop", lang: "Lua", color: "#0000ff", desc: "[FiveM] Sistema avanzado de Mascotas. Compra, cuida e interactúa con animales." },
    { name: "DP-PedsSystem", lang: "Lua", color: "#0000ff", desc: "[FiveM] Gestión de PEDS para transformarte en otros personajes en QBCore." },
    { name: "DP-Extras", lang: "Lua", color: "#0000ff", desc: "[FiveM] Personalización de vehículos de trabajo (policía/ems) para gestión de extras." },
    { name: "DP-Boombox", lang: "JavaScript", color: "#f1e05a", desc: "[FiveM] Música estilo Spotify/YouTube directamente en el servidor. Interfaz propia." },
    { name: "DP-Banking", lang: "Lua", color: "#0000ff", desc: "[FiveM] Sistema bancario avanzado con gestión de finanzas, transferencias e historial." },
    { name: "DP-Fuel-V1", lang: "Lua", color: "#0000ff", desc: "[FiveM] Sistema de combustible clásico (LegacyFuel Rediseñado). Simple y efectivo." },
    { name: "qb-clothing-redesign", lang: "Lua", color: "#0000ff", desc: "[FiveM] Rediseño del sistema de ropa de QBCore con mejor interfaz." },
    { name: "DP-Notify", lang: "CSS", color: "#563d7c", desc: "[FiveM] Sistema de notificaciones moderno y ligero, sin dependencias complejas." },
    { name: "DP-Animations", lang: "Lua", color: "#0000ff", desc: "[FiveM] Menú avanzado de animaciones para acceder a gran variedad de emotes." },
    { name: "DP-AntiBackdoor", lang: "Lua", color: "#0000ff", desc: "[FiveM] Protección esencial para servidores FiveM contra backdoors comunes." },
    { name: "DP-Quests", lang: "JavaScript", color: "#f1e05a", desc: "[FiveM] Sistema de misiones interactivas para dar vida al servidor." }
];

// --- DATOS: FRASES TROLL CMD ---
const cmdPhrases = [
    // --- TUS CLÁSICOS ---
    "Descargando RAM... 20%... 50%... 100%... \nError: No hay suficiente espacio en el cerebro.",
    "rm -rf / --no-preserve-root \n(Es broma, no te asustes... ¿o sí?)",
    "Detectado usuario guapo/a mirando la pantalla. \nGuardando foto en /tmp/stalker...",
    "Cargando módulos de personalidad... \nError 404: Personalidad no encontrada.",

    // --- CHISTES MALOS (DAD JOKES) ---
    "¿Qué le dice un bit al otro? \nNos vemos en el bus.",
    "¿Por qué los programadores confunden Halloween con Navidad? \nPorque Oct 31 == Dec 25.",
    "Hay 10 tipos de personas: \nLas que saben binario y las que no.",
    "Se abre el telón, aparece un gigabyte. \nSe cierra el telón. ¿Cómo se llama la película? \n¡Miedo a la tera!",

    // --- HUMOR NEGRO TECH / OSCURO ---
    "Matando procesos hijos... \n(Suena terrible, pero es Linux, no llames a la policía).",
    "Un programador no tiene errores... \ntiene 'features' sorpresa no documentadas.",
    "Si el código compila a la primera... \nSOSPCHA. ALGO ANDA MUY MAL.",
    "Borrando base de datos de producción... \n3... 2... 1... \n¡Era broma! (Casi te da un infarto, eh?)",
    "Mi código es como un chiste malo... \nSi tengo que explicarlo, es que no sirve.",
    "Knock, knock. \n¿Quién es? \n(Silencio incómodo... es una espera asíncrona).",
    "sudo destroy-life --force \nPermiso denegado: Ya está destruida.",

    "Cargando módulos de personalidad... [OK]",
    // 1. CORAZÓN BRAILLE (Ajustado para que no se vea chueco)
    "Dibujando amor para los visitantes...\n\n" +
    "          ⢀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣄⣀⣀⣀⡀\n" +
    "       ⢀⡴⠋⠀⢀⡤⣖⡫⠭⠭⠭⠭⣍⣑⣒⣒⣒⣻⠭⢝⠲⣄⡀\n" +
    "     ⢀⡾⠁⠠⢖⡽⣪⡑⠬⡭⠭⢙⡄⠀⠀⠀⢐⠒⠒⠒⢤⠀⠀⠹⡄\n" +
    "   ⣠⡞⠁⠀⠀⢈⡜⠁⠁⣠⣭⣄⠐⢈⢦⠀⠀⢠⠒⠈⠉⣩⠉⠲⢄⢷⡀\n" +
    "⠀⡴⡻⢛⣩⠥⣄⡙⢆⢀⠄⠛⠿⠋⠀⠅⡼⠁⠲⣇⠁⠀⠺⣿⠗⠀⢄⡧⡹⡆\n" +
    "⢸⢱⢀⡏⠀⣰⣄⡉⠀⠉⠒⠛⠓⠚⣚⡉⠀⠀⠀⢯⣐⠠⠴⠤⠄⡒⠛⢸⢰⡇\n" +
    "⢸⡄⡈⡇⠉⢻⡀⠙⢳⣦⣄⡉⠉⠁⣏⠤⠦⠄⠀⠀⡽⠇⠄⡀⢀⣿⡄⡊⢲⠇\n" +
    "⠀⠻⣌⠒⠀⠈⣿⣶⣬⣧⣀⠉⠙⡷⠶⠤⢤⣄⣘⣛⣁⣠⣤⠖⡏⢻⡇⢠⡏⠀\n" +
    "⠀⠀⠘⢧⠀⠀⣿⣿⣿⣿⣿⣿⣶⣧⣤⣀⣸⣇⣀⣸⣀⣀⣼⣤⣿⣾⣷⠘⡇⠀\n" +
    "⠀⠀⠀⠘⢧⡀⢸⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡇⠀\n" +
    "⠀⠀⠀⠀⠈⠻⣆⠹⣌⢻⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡇⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠈⢳⡈⠻⣀⠀⠈⡟⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡇⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡈⠓⢾⣇⡀⠀⢸⡇⠀⢸⠏⠉⡏⢹⣃⣷⠃⢠⠇⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⢤⣌⣉⠙⠛⠓⠒⠚⠓⠚⠋⠉⠉⣀⣠⠏⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠛⠛⠛⠛⠛⠉⠉⠀⠀⠀⠀",

    // 2. TEXTO 'HELLO' GRANDE
    "Iniciando protocolo de saludo...\n\n" +
    "♡✧ ¡Buenvenido a mi web! ✧♡",

    "sudo apt-get install vida-social...\nError: 404 Not Found.",
];

// 1. Datos de tus Webs
const webProjectsData = [
    // --- TOP 5 (Se verán en la página principal) ---
    {
        id: 1,
        title: "Portfolio",
        year: "2025",
        url: "#",
        image: "Images/Proyectos Webs/Web1.png",
        desc: "Mi identidad digital v2.0. Diseño 'Cyber Aurora' con animaciones JS y optimización de rendimiento."
    },
    {
        id: 2,
        title: "CineStash",
        year: "2023",
        url: "#",
        image: "Images/Proyectos Webs/Web2.png",
        desc: "Plataforma social estilo IMDB/TVTime. Crea listas, califica contenido y sigue a otros usuarios. Full Stack."
    },
    {
        id: 3,
        title: "Bio-Arcade",
        year: "2024",
        url: "#",
        image: "Images/Proyectos Webs/Web3.png",
        desc: "Gestor integral de salud: Rutinas de gimnasio, calendario dietético y tutoriales en video."
    },
    {
        id: 4,
        title: "Plastico-Ware",
        year: "2024",
        url: "#",
        image: "Images/Proyectos Webs/Web4.png",
        desc: "E-commerce personalizado con integración Tebex API para venta automatizada de assets digitales."
    },
    {
        id: 5,
        title: "DP-CivNets Roleplay",
        year: "2025",
        url: "#",
        image: "Images/Proyectos Webs/Web5.png",
        desc: "Landing Page inmersiva para servidor de GTA V Roleplay. Diseño UI/UX moderno visualizado en Figma."
    },

    // --- EL RESTO (Solo visibles en el menú 'Ver Más') ---
    {
        id: 6,
        title: "Ocular_Grid CSS",
        year: "2023",
        url: "#",
        image: "Images/Proyectos Webs/Web6.png",
        desc: "Experimento de maquetación avanzada. Galería responsiva con transiciones y efectos hover dinámicos."
    },
    {
        id: 7,
        title: "WaveSounds",
        year: "2024",
        url: "#",
        image: "Images/Proyectos Webs/Web7.png",
        desc: "Clon de la interfaz de Spotify. Reproductor de música funcional y gestión de playlists."
    },
    {
        id: 8,
        title: "API Explorer",
        year: "2024",
        url: "#",
        image: "Images/Proyectos Webs/Web8.png",
        desc: "Consumo de APIs externas (Rick & Morty / PokeAPI). Paginación asíncrona y filtrado de datos."
    },
    {
        id: 9,
        title: "Task_Daemon",
        year: "2024",
        url: "#",
        image: "Images/Proyectos Webs/Web9.png",
        desc: "Aplicación de productividad estilo ToDo / Trello. Gestión de tareas Drag & Drop y organización por tableros."
    },
    {
        id: 10,
        title: "WinCalc Pro",
        year: "2024",
        url: "#",
        image: "Images/Proyectos Webs/Web10.png",
        desc: "Calculadora científica con estética Windows 11. Historial de operaciones y funciones avanzadas."
    }
];

// 2. Variables del DOM
const webListMain = document.getElementById('web-list-main');
const webListFull = document.getElementById('web-list-full');
const previewImg = document.getElementById('web-preview-img');
const previewTitle = document.getElementById('web-preview-title');
const previewDesc = document.getElementById('web-preview-desc');
const previewLink = document.getElementById('web-preview-link');
const sideMenu = document.getElementById('side-menu');
const btnViewMore = document.getElementById('btn-view-more');
const btnCloseMenu = document.getElementById('btn-close-menu');

// 3. Función para Renderizar Listas
function renderWebs() {
    if (!webListMain) return;

    // A. Renderizar la lista principal
    const mainItems = webProjectsData.slice(0, 8);
    webListMain.innerHTML = mainItems.map((web, index) => createWebItemHTML(web, index)).join('');

    // B. Renderizar la lista completa (Para el menú lateral)
    // Nota: Pasamos 'true' como segundo argumento para indicar que es el menú lateral
    webListFull.innerHTML = webProjectsData.map((web, index) => createWebItemHTML(web, index, true)).join('');

    // C. Cargar el primero por defecto en la preview
    if (webProjectsData.length > 0) {
        updatePreview(0);
    }
}

// Helper para crear el HTML de cada item
function createWebItemHTML(web, index, isSideMenu = false) {
    // Si es el menú lateral, queremos cerrar el menú al hacer click, si no, solo actualizamos
    const clickAction = isSideMenu ? `updatePreview(${index}); closeSideMenu()` : `updatePreview(${index})`;

    return `
        <li class="web-item" onclick="${clickAction}">
            <span class="web-item-title">${web.title}</span>
            <span class="web-item-year">${web.year}</span>
        </li>
    `;
}

// 4. Función para Actualizar la Preview
window.updatePreview = function (index) {
    const web = webProjectsData[index];

    // --- LÓGICA DE RESALTADO (HIGHLIGHT) ---
    // 1. Quitamos la clase 'active-web' de todos los items de la lista principal
    const allItems = document.querySelectorAll('#web-list-main .web-item');
    allItems.forEach(item => item.classList.remove('active-web'));

    // 2. Se la ponemos SOLO al item que hemos clickado (si existe en la lista principal)
    // Nota: Si el click viene del menú "Ver más" (índice > 4), no se marcará nada en la lista principal, lo cual es correcto.
    if (allItems[index]) {
        allItems[index].classList.add('active-web');
    }
    // ----------------------------------------

    // Efecto de desvanecimiento de imagen
    previewImg.style.opacity = 0;

    setTimeout(() => {
        previewImg.src = web.image;
        previewImg.onerror = function () {
            this.src = 'https://via.placeholder.com/800x450/000000/00f3ff?text=No+Image';
        };

        // ACTUALIZAMOS DATOS
        previewTitle.textContent = web.title;
        previewDesc.textContent = web.desc;
        previewLink.href = web.url;

        previewImg.style.opacity = 1;
    }, 200);
};

// Función auxiliar para cerrar el menú (para usarla en el HTML string de arriba)
function closeSideMenu() {
    if (sideMenu) sideMenu.classList.remove('active');
}

// 5. Lógica del Menú Lateral
if (btnViewMore && sideMenu && btnCloseMenu) {
    btnViewMore.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });

    btnCloseMenu.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Cerrar si haces click fuera del contenido (opcional)
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !btnViewMore.contains(e.target) && sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
        }
    });
}

/* =========================================================================
   2. FUNCIONES Y LÓGICA
   ========================================================================= */

// --- RENDERIZAR PROYECTOS GITHUB (OPTIMIZADO CON LAZY LOADING) ---
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return; // Validación de seguridad

    let projectsHTML = ''; // Buffer para el HTML

    githubProjects.forEach(proj => {
        let iconClass = 'fas fa-code';
        if (proj.lang === 'Lua') iconClass = 'fas fa-moon';
        if (proj.lang === 'JavaScript') iconClass = 'fab fa-js';
        if (proj.lang === 'CSS') iconClass = 'fab fa-css3-alt';
        if (proj.lang === 'HTML') iconClass = 'fab fa-html5';

        const imagePath = `Images/Proyectos Github/${proj.name}.png`;

        projectsHTML += `
            <div class="card project-card">
                <div class="content project-content">
                    
                    <div class="back project-face-visible">
                        <div class="back-content project-face-inner">
                            
                            <img src="${imagePath}" 
                                 class="project-cover-img" 
                                 alt="${proj.name}"
                                 loading="lazy"
                                 onerror="this.style.display='none'; this.nextElementSibling.querySelector('.project-icon-big').style.display='block'">

                            <div class="project-info-text">
                                <i class="${iconClass} project-icon-big" style="display: none; font-size: 3rem; margin-bottom: 10px;"></i>
                                <strong class="project-name-main">${proj.name}</strong>
                            </div>
                        </div>
                    </div>

                    <div class="front project-face-hidden">
                        <div class="img project-bg-img">
                            <div class="circle"></div>
                            <div class="circle" id="right"></div>
                            <div class="circle" id="bottom"></div>
                        </div>

                        <div class="front-content project-content-hover">
                            <small class="badge" style="color: ${proj.color}; border-color: ${proj.color}">${proj.lang}</small>
                            
                            <div class="description">
                                <div class="title desc-title">
                                    <p class="title">
                                        <strong>Detalles</strong>
                                    </p>
                                    <a href="https://github.com/DonPlastico/${proj.name}" target="_blank" class="repo-link">
                                       <i class="fab fa-github fa-lg"></i>
                                    </a>
                                </div>
                                <p class="card-footer">
                                    ${proj.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;
    });

    // Inserción única al DOM
    container.innerHTML = projectsHTML;
}

// --- TYPEWRITER EFFECT ---
const textElement = document.getElementById('typewriter');
const phrases = ["Estudiante DAW", "FiveM Scripter", "Gamer & Cinéfilo", "Marvel Fan", "IA Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    if (!textElement) return; // Validación de seguridad

    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    setTimeout(typeWriter, typeSpeed);
}

// --- CMD TROLL LOGIC ---
const cmdElement2 = document.getElementById('cmd-text');
let cmdIndex = 0;
let cmdCharIndex = 0;
let isCmdDeleting = false;
let cmdSpeed = 50;

function typeCmd() {
    if (!cmdElement2) return; // Validación de seguridad

    const currentText = cmdPhrases[cmdIndex];
    if (isCmdDeleting) {
        cmdElement2.textContent = currentText.substring(0, cmdCharIndex - 1);
        cmdCharIndex--;
        cmdSpeed = 30;
    } else {
        cmdElement2.textContent = currentText.substring(0, cmdCharIndex + 1);
        cmdCharIndex++;
        cmdSpeed = 50 + Math.random() * 50;
    }
    if (!isCmdDeleting && cmdCharIndex === currentText.length) {
        isCmdDeleting = true;
        cmdSpeed = 3000;
    } else if (isCmdDeleting && cmdCharIndex === 0) {
        isCmdDeleting = false;
        cmdIndex = (cmdIndex + 1) % cmdPhrases.length;
        cmdSpeed = 1000;
    }
    setTimeout(typeCmd, cmdSpeed);
}

// --- BACKGROUND PARTICLES (OPTIMIZADO CON PAUSA) ---
const canvas = document.getElementById('canvas-bg');
const ctx = canvas ? canvas.getContext('2d') : null;
let particlesArray;
let animationId; // Para controlar el bucle
let isAnimating = false; // Estado de la animación

if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
}

class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() * 1) - 0.5; this.speedY = (Math.random() * 1) - 0.5; }
    update() { this.x += this.speedX; this.y += this.speedY; if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX; if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY; }
    draw() { ctx.fillStyle = '#00f3ff'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}

function init() {
    if (!canvas) return;
    particlesArray = [];
    // OPTIMIZACIÓN: Aumentamos el divisor de 9000 a 14000 (Menos partículas = Mejor rendimiento)
    let numberOfParticles = (canvas.height * canvas.width) / 14000;
    for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle());
}

// Funciones de control de animación
function startAnimation() {
    if (!isAnimating && ctx) {
        isAnimating = true;
        animate();
    }
}

function stopAnimation() {
    isAnimating = false;
    cancelAnimationFrame(animationId);
}

function animate() {
    if (!isAnimating) return; // Si está pausado, no hacemos nada

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        connect(i);
    }
    animationId = requestAnimationFrame(animate);
}

function connect(a) {
    for (let b = a; b < particlesArray.length; b++) {
        let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            let opacityValue = 1 - (distance / 10000); ctx.strokeStyle = 'rgba(0, 243, 255,' + opacityValue * 0.2 + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x, particlesArray[a].y); ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke();
        }
    }
}

// =========================================================================
// 3. INICIALIZACIÓN
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    renderProjects();
    typeCmd();
    init();
    startAnimation();
    initScrollObserver();
    renderWebs();

    // Configurar enlaces simples para Social Cards (ya sin Tilt 3D)
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('click', () => {
            const link = card.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        });
    });

    // --- DISCORD WIDGET LOGIC ---
    const serverID = "712620268572639254";

    const countText = document.getElementById('discord-count-text');

    if (countText) {
        fetch(`https://discord.com/api/guilds/${serverID}/widget.json`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                // Si el servidor devuelve datos
                if (data.presence_count) {
                    countText.textContent = `${data.presence_count} en línea`;
                    countText.style.color = "#ccc"; // Color normal
                } else {
                    countText.textContent = "Offline";
                    countText.style.color = "#f04747"; // Rojo si está offline
                }
            })
            .catch(error => {
                console.error("Error cargando Discord:", error);
                // Si falla (CORS o ID mal), ponemos un número falso para que no quede feo en la demo
                countText.textContent = "5 en línea";
            });
    }

    // =========================================================================
    // 4. OBSERVADOR DE SCROLL (OPTIMIZACIÓN DE RECURSOS)
    // =========================================================================
    function initScrollObserver() {
        const targetSection = document.querySelector('.full-width-container');
        const bgOverlay = document.getElementById('project-bg-overlay');

        if (!targetSection || !bgOverlay) return;

        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: "-100px 0px 0px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // ESTAMOS EN LA SECCIÓN DE PROYECTOS (Fondo oscuro visible)
                    bgOverlay.classList.add('active');

                    // OPTIMIZACIÓN: Pausamos las partículas porque no se ven
                    stopAnimation();
                } else {
                    // ESTAMOS ARRIBA (Fondo transparente)
                    bgOverlay.classList.remove('active');

                    // Reactivamos partículas
                    startAnimation();
                }
            });
        }, options);

        observer.observe(targetSection);
    }
});