/* =========================================================================
   1. DATOS (EDITAR AQUÍ)
   ========================================================================= */

// --- DATOS: SERIES & PELÍCULAS ---
const entertainmentData = {
    series: [
        { title: "Stranger Things", status: "Viendo", image: "https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
        { title: "El Mentalista", status: "Viendo", image: "https://image.tmdb.org/t/p/w300/acYvRjWkVA09F0l7g10P7n2hG5j.jpg" },
        { title: "Chicago Fire", status: "Viendo", image: "https://image.tmdb.org/t/p/w300/iiI1ju8xwV6O8rW12O8Fj2C49Jp.jpg" },
        { title: "Mentes Criminales", status: "Pausada", image: "https://image.tmdb.org/t/p/w300/7TCwgX7oQKxcWyeh9VbejfCNs86.jpg" },
        { title: "Futurama", status: "Pausada", image: "https://image.tmdb.org/t/p/w300/k5e8F5S17m3c4562kM182g26Zf.jpg" },
        { title: "Sweet Home", status: "Pausada", image: "https://image.tmdb.org/t/p/w300/u8Y7525j93N83akM7fK1W5B5YmO.jpg" },
        { title: "Arcane", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg" },
        { title: "La que se avecina", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/1p7r6tOq5L5F4q6u2w3x4z5y6.jpg" },
        { title: "Asalto al Banco Central", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/ye2JqFhYvD31E3V5gZ1f.jpg" },
        { title: "Goosebumps", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/p1a7o5e6x4y5z.jpg" },
        { title: "TWD: Daryl Dixon", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/q7XF2J4.jpg" },
        { title: "The Frankenstein Chronicles", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/2j2.jpg" },
        { title: "Resident Alien", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/7aJ4.jpg" },
        { title: "Fire Country", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/zF3.jpg" },
        { title: "Alien: Earth", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/alien.jpg" },
        { title: "Sayonara no Tsuzuki", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/jp.jpg" },
        { title: "Mr. Sunshine", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/u.jpg" },
        { title: "The King: Eternal Monarch", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/kr.jpg" },
        { title: "The Legend of Vox Machina", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/vox.jpg" },
        { title: "The Witcher: Blood Origin", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/witcher.jpg" },
        { title: "La Vuelta al Mundo en 80 Días", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/mW.jpg" },
        { title: "The Midnight Club", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/mid.jpg" },
        { title: "Dr. Romantic", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/dr.jpg" },
        { title: "We Were Liars", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/liars.jpg" },
        { title: "The Acolyte", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/starwars.jpg" },
        { title: "Señoras del (h)AMPA", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/hampa.jpg" },
        { title: "The Following", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/fol.jpg" },
        { title: "Sin Gluten Free", status: "Pendiente", image: "https://ui-avatars.com/api/?name=Sin+Gluten&background=random" },
        { title: "Ladrones", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/ladrones.jpg" },
        { title: "I Know What You Did Last Summer", status: "Pendiente", image: "https://image.tmdb.org/t/p/w300/iknow.jpg" }
    ],
    movies: [
        // FASE 1-3 (Vistas)
        { title: "Capitán América: El primer vengador", watched: true, year: "2011", image: "https://image.tmdb.org/t/p/w300/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" },
        { title: "Capitana Marvel", watched: true, year: "2019", image: "https://image.tmdb.org/t/p/w300/AtsgWhDnVBXzFqSPXWjFhVTlIxM.jpg" },
        { title: "Iron Man", watched: true, year: "2008", image: "https://image.tmdb.org/t/p/w300/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
        { title: "Iron Man 2", watched: true, year: "2010", image: "https://image.tmdb.org/t/p/w300/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
        { title: "Spider-Man (Tobey)", watched: true, year: "2002", image: "https://image.tmdb.org/t/p/w300/gh4cZbhZxyTbgxKO833DnmUE0m.jpg" },
        { title: "Spider-Man 2", watched: true, year: "2004", image: "https://image.tmdb.org/t/p/w300/olxktmXHkdZOXTihVEQYbggs2Jb.jpg" },
        { title: "Spider-Man 3", watched: true, year: "2007", image: "https://image.tmdb.org/t/p/w300/qFmwhVUoUSXjkKRmca5yGDxzPQi.jpg" },
        { title: "X-Men", watched: true, year: "2000", image: "https://image.tmdb.org/t/p/w300/l0qPTK5j0Y5gA5JgK98cQy7kR8D.jpg" },
        { title: "X-Men 2", watched: true, year: "2003", image: "https://image.tmdb.org/t/p/w300/1jM7p7k04rE4s1lF8Q1yG5f1v5.jpg" },
        { title: "X-Men: La Decisión Final", watched: true, year: "2006", image: "https://image.tmdb.org/t/p/w300/2y48X7W3d6g0f7f3y3z2x5v5.jpg" },
        { title: "El increíble Hulk", watched: true, year: "2008", image: "https://image.tmdb.org/t/p/w300/7k79J0O1s2J1f1a1d1d1.jpg" },
        { title: "Thor", watched: true, year: "2011", image: "https://image.tmdb.org/t/p/w300/prSfAi1xGrhMQZjB2K0f0q0s.jpg" },
        { title: "X-Men: Primera Generación", watched: true, year: "2011", image: "https://image.tmdb.org/t/p/w300/3w1f3f3f3f3f3f3f.jpg" },
        { title: "Los Vengadores", watched: true, year: "2012", image: "https://image.tmdb.org/t/p/w300/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
        { title: "The Amazing Spider-Man", watched: true, year: "2012", image: "https://image.tmdb.org/t/p/w300/jIfkQVd0fQf1s1f1.jpg" },
        { title: "Iron Man 3", watched: true, year: "2013", image: "https://image.tmdb.org/t/p/w300/qhPtAc1TKbMPqnvcdXSOn9Bn7hZ.jpg" },
        { title: "Lobezno Inmortal", watched: true, year: "2013", image: "https://image.tmdb.org/t/p/w300/9bZ6x8d6x8d6.jpg" },
        { title: "Thor: El Mundo Oscuro", watched: true, year: "2013", image: "https://image.tmdb.org/t/p/w300/bnX5PqAdQZRXSw3aX3D71Ndb87C.jpg" },
        { title: "Capitán América: Soldado Invierno", watched: true, year: "2014", image: "https://image.tmdb.org/t/p/w300/tVFRnDkc3h3a7F1e1.jpg" },
        { title: "The Amazing Spider-Man 2", watched: true, year: "2014", image: "https://image.tmdb.org/t/p/w300/c3e9e18ss85d.jpg" },
        { title: "X-Men: Días del Futuro Pasado", watched: true, year: "2014", image: "https://image.tmdb.org/t/p/w300/qJ2tW6aC1a.jpg" },
        { title: "Guardianes de la Galaxia", watched: true, year: "2014", image: "https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJWQ0dMob.jpg" },
        // Pendientes
        { title: "Guardianes Vol. 2", watched: false, year: "2017", image: "https://image.tmdb.org/t/p/w300/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg" },
        { title: "Yo soy Groot", watched: false, year: "2022", image: "https://image.tmdb.org/t/p/w300/jZ32G3f2F3.jpg" },
        { title: "Era de Ultrón", watched: false, year: "2015", image: "https://image.tmdb.org/t/p/w300/4ssDuvEDkSArWEdyww2X5DY.jpg" },
        { title: "Deadpool", watched: false, year: "2016", image: "https://image.tmdb.org/t/p/w300/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg" },
        { title: "Ant-Man", watched: false, year: "2015", image: "https://image.tmdb.org/t/p/w300/D6e8R00leoHG.jpg" },
        { title: "Civil War", watched: false, year: "2016", image: "https://image.tmdb.org/t/p/w300/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg" },
        { title: "X-Men: Apocalipsis", watched: false, year: "2016", image: "https://image.tmdb.org/t/p/w300/zSouWWrySXshPCT4t3UKCQGayyo.jpg" },
        { title: "Black Widow", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
        { title: "Black Panther", watched: false, year: "2018", image: "https://image.tmdb.org/t/p/w300/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
        { title: "Homecoming", watched: false, year: "2017", image: "https://image.tmdb.org/t/p/w300/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
        { title: "Doctor Strange", watched: false, year: "2016", image: "https://image.tmdb.org/t/p/w300/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
        { title: "Ragnarok", watched: false, year: "2017", image: "https://image.tmdb.org/t/p/w300/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },
        { title: "Logan", watched: false, year: "2017", image: "https://image.tmdb.org/t/p/w300/fnbjcRDYn6YviCcePDnGdyAkcBq.jpg" },
        { title: "Ant-Man y Avispa", watched: false, year: "2018", image: "https://image.tmdb.org/t/p/w300/eivQmS3wqzqnQWILHLc4qu4F4lv.jpg" },
        { title: "Infinity War", watched: false, year: "2018", image: "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
        { title: "Venom", watched: false, year: "2018", image: "https://image.tmdb.org/t/p/w300/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" },
        { title: "Deadpool 2", watched: false, year: "2018", image: "https://image.tmdb.org/t/p/w300/to0spRl1WKjDs1M8x0y.jpg" },
        { title: "Endgame", watched: false, year: "2019", image: "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
        // Fase 4-6
        { title: "Loki", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" },
        { title: "What If...?", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/lztz5XBMG1x6Y5UBzSIIm.jpg" },
        { title: "WandaVision", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/glKDfE6btIRcVB5zrjspRIs4r52.jpg" },
        { title: "Falcon y Soldado", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/6kbAMLteGO8yyewYau6bJ683sw7.jpg" },
        { title: "Shang-Chi", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg" },
        { title: "Eternals", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/6AdXwFTRTAzggD2Qmmt5.jpg" },
        { title: "Far From Home", watched: false, year: "2019", image: "https://image.tmdb.org/t/p/w300/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" },
        { title: "No Way Home", watched: false, year: "2021", image: "https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
        { title: "Dark Phoenix", watched: false, year: "2019", image: "https://image.tmdb.org/t/p/w300/kZv92eNc0Ynb.jpg" },
        { title: "Multiverso Locura", watched: false, year: "2022", image: "https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1oKA64eZKLO.jpg" },
        { title: "Moon Knight", watched: false, year: "2022", image: "https://image.tmdb.org/t/p/w300/YksR65as1ppF2N48TJAh2mZhT.jpg" },
        { title: "Love and Thunder", watched: false, year: "2022", image: "https://image.tmdb.org/t/p/w300/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
        { title: "Wakanda Forever", watched: false, year: "2022", image: "https://image.tmdb.org/t/p/w300/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" },
        { title: "Quantumania", watched: false, year: "2023", image: "https://image.tmdb.org/t/p/w300/3cxoz4.jpg" },
        { title: "Guardianes Vol. 3", watched: false, year: "2023", image: "https://image.tmdb.org/t/p/w300/r2J02ZNesAtJ65lJavev66.jpg" },
        { title: "Deadpool & Wolverine", watched: false, year: "2024", image: "https://image.tmdb.org/t/p/w300/8cdWjvZonExuuQq28.jpg" },
        { title: "Secret Invasion", watched: false, year: "2023", image: "https://image.tmdb.org/t/p/w300/f5.jpg" },
        { title: "Fantastic Four", watched: false, year: "2025", image: "https://image.tmdb.org/t/p/w300/8vlPyqx8Ni.jpg" },
        { title: "Secret Wars", watched: false, year: "2027", image: "https://ui-avatars.com/api/?name=Secret+Wars&background=000&color=fff" }
    ]
};

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

/* =========================================================================
   2. FUNCIONES Y LÓGICA
   ========================================================================= */

// --- RENDERIZAR SERIES Y PELIS ---
function renderLists() {
    const seriesContainer = document.getElementById('series-list');
    const moviesContainer = document.getElementById('movies-list');
    seriesContainer.innerHTML = '';
    moviesContainer.innerHTML = '';

    entertainmentData.series.forEach(item => {
        const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=random&color=fff`;
        let statusColor = "#fca50f"; // Naranja
        if (item.status === "Viendo") statusColor = "#00f3ff"; // Azul
        if (item.status === "Pausada") statusColor = "#ff4757"; // Rojo

        seriesContainer.innerHTML += `
            <div class="list-item">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='${fallbackImage}'">
                <div class="item-info">
                    <h4>${item.title}</h4>
                    <span class="tag" style="color: ${statusColor}; border-color: ${statusColor}30;">${item.status}</span>
                </div>
            </div>
        `;
    });

    entertainmentData.movies.forEach(item => {
        const statusClass = item.watched ? 'watched' : 'pending';
        const statusText = item.watched ? 'Vista' : 'Pendiente';
        const statusTagColor = item.watched ? 'color: var(--accent-blue);' : 'color: #fca50f;';
        const eyeIconHtml = item.watched ? '<i class="fas fa-eye status-icon" title="Vista"></i>' : '';
        const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=random&color=fff`;

        moviesContainer.innerHTML += `
            <div class="list-item ${statusClass}">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='${fallbackImage}'">
                <div class="item-info">
                    <h4>${item.title}</h4>
                    <span class="tag" style="${statusTagColor}">${item.year} • ${statusText}</span>
                </div>
                ${eyeIconHtml}
            </div>
        `;
    });
}

// --- RENDERIZAR PROYECTOS GITHUB (LIMPIO PARA 3D TILT) ---
function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';

    githubProjects.forEach(proj => {
        let icon = '<i class="fas fa-code"></i>';
        if (proj.lang === 'Lua') icon = '<i class="fas fa-moon"></i>';
        if (proj.lang === 'JavaScript') icon = '<i class="fab fa-js"></i>';
        if (proj.lang === 'CSS') icon = '<i class="fab fa-css3-alt"></i>';

        const localImgPath = `Images/Proyectos/${proj.name}.png`;

        // CAMBIO: Quitamos ${randomAnim}. Solo dejamos la clase base flip-card.
        container.innerHTML += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="project-icon">${icon}</div>
                        <div class="project-name">${proj.name}</div>
                        <div class="project-lang">
                            <span class="lang-dot" style="background:${proj.color}"></span>
                            ${proj.lang}
                        </div>
                    </div>
                    
                    <div class="flip-card-back">
                        <div class="back-title">${proj.name}</div>
                        
                        <img src="${localImgPath}" class="project-preview-img" onerror="this.style.display='none'">
                        
                        <div class="desc-container">
                            <p class="project-desc">${proj.desc}</p>
                            
                            <a href="https://github.com/DonPlastico/${proj.name}" target="_blank" class="project-link">
                                <i class="fab fa-github"></i> Ver Código
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// --- TYPEWRITER EFFECT ---
const textElement = document.getElementById('typewriter');
const phrases = ["Estudiante DAW", "FiveM Scripter", "Gamer & Cinéfilo", "Marvel Fan", "IA Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
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

// --- BACKGROUND PARTICLES ---
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particlesArray;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); });
class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() * 1) - 0.5; this.speedY = (Math.random() * 1) - 0.5; }
    update() { this.x += this.speedX; this.y += this.speedY; if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX; if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY; }
    draw() { ctx.fillStyle = '#00f3ff'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}
function init() { particlesArray = []; let numberOfParticles = (canvas.height * canvas.width) / 9000; for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle()); }
function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); particlesArray[i].draw(); connect(i); } requestAnimationFrame(animate); }
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
    renderLists();
    renderProjects();
    typeCmd();
    init();
    animate();
    initScrollObserver();
    init3DTilt();
});

// =========================================================================
// 4. OBSERVADOR DE SCROLL (CAMBIO DE FONDO)
// =========================================================================
function initScrollObserver() {
    const targetSection = document.querySelector('.full-width-container');
    const bgOverlay = document.getElementById('project-bg-overlay');

    // Configuración del vigilante
    const options = {
        root: null, // El viewport
        threshold: 0.1, // Se activa cuando el 10% de la sección es visible
        rootMargin: "-100px 0px 0px 0px" // Un pequeño margen para que no cambie instantáneamente
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la sección de proyectos entra en pantalla:
                bgOverlay.classList.add('active');
            } else {
                // Si salimos de la sección:
                bgOverlay.classList.remove('active');
            }
        });
    }, options);

    if (targetSection) {
        observer.observe(targetSection);
    }
}

// =========================================================================
// 5. EFECTO 3D TILT + SONIDO LOCAL (ACTUALIZADO PARA SOCIAL)
// =========================================================================
function init3DTilt() {
    const cards = document.querySelectorAll('.flip-card');
    const hoverSfx = new Audio("audio/hover.mp3");
    hoverSfx.volume = 0.01;

    cards.forEach(card => {
        const inner = card.querySelector('.flip-card-inner');

        // DETECTAR SI ES UNA TARJETA SOCIAL (Para no girarla 180 grados)
        const isSocial = card.classList.contains('social-card');

        // CLIC EN SOCIAL CARDS (Redirección)
        if (isSocial) {
            card.addEventListener('click', () => {
                const link = card.getAttribute('data-link');
                if (link) window.open(link, '_blank');
            });
        }

        // MOVER RATÓN
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15; // Un poco más de ángulo
            const rotateY = ((x - centerX) / centerX) * 15;

            // LÓGICA DIFERENTE: 
            // Si es Social -> Solo inclinación (rotateX/Y)
            // Si es Proyecto -> Inclinación + Vuelta (rotateY 180)
            let transformStyle = '';
            if (isSocial) {
                transformStyle = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`; // Scale para que destaque
            } else {
                transformStyle = `perspective(1000px) rotateY(${180 + rotateY}deg) rotateX(${rotateX}deg)`;
            }

            inner.style.transform = transformStyle;

            // Sombra dinámica según el color de la tarjeta
            if (isSocial) {
                // Sombra suave para social
                inner.style.boxShadow = `${-rotateY}px ${rotateX}px 20px rgba(0,0,0,0.5)`;
            } else {
                // Sombra neón para proyectos
                inner.style.boxShadow = `${-rotateY}px ${rotateX}px 30px rgba(0, 243, 255, 0.2)`;
            }
        });

        // ENTRAR
        card.addEventListener('mouseenter', () => {
            inner.style.transition = 'transform 0.1s ease-out';
            hoverSfx.currentTime = 0;
            const playPromise = hoverSfx.play();
            if (playPromise !== undefined) { playPromise.catch(() => { }); }
        });

        // SALIR
        card.addEventListener('mouseleave', () => {
            inner.style.transition = 'transform 0.5s ease-in-out';
            inner.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            inner.style.boxShadow = 'none'; // Quitar sombra extra
        });
    });
}