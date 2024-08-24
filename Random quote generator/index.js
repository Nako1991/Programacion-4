"use strict"

function quoteGenerator() {
    document.getElementById("quote").innerText = generateRandomQuote();
}

function generateRandomQuote() {
    const frasesFamosas = [
        "La vida es lo que sucede mientras estás ocupado haciendo otros planes. - John Lennon",
        "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
        "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. - Winston Churchill",
        "No hay nada imposible, porque los sueños de ayer son las esperanzas de hoy y pueden convertirse en realidad mañana. - Robert H. Goddard",
        "La mejor manera de predecir el futuro es creándolo. - Peter Drucker",
        "El conocimiento habla, pero la sabiduría escucha. - Jimi Hendrix",
        "La imaginación lo es todo. Es la vista previa de las próximas atracciones de la vida. - Albert Einstein",
        "La única cosa de la que debemos tener miedo es del miedo mismo. - Franklin D. Roosevelt",
        "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
        "Sé el cambio que quieres ver en el mundo. - Mahatma Gandhi",
        "La felicidad no es algo hecho. Proviene de tus propias acciones. - Dalai Lama",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
        "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
        "El único límite para nuestra realización de mañana serán nuestras dudas de hoy. - Franklin D. Roosevelt",
        "La mejor venganza es un éxito masivo. - Frank Sinatra",
        "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello. - Charles R. Swindoll",
        "No hay caminos para la paz; la paz es el camino. - Mahatma Gandhi",
        "El fracaso es la oportunidad de comenzar de nuevo con más inteligencia. - Henry Ford",
        "No puedes cruzar el mar simplemente mirando el agua. - Rabindranath Tagore",
        "La mente es todo. En lo que piensas te conviertes. - Buda",
        "La peor experiencia es la mejor maestra. - Kovo",
        "La verdadera medida de un hombre no es cómo se comporta en momentos de confort y conveniencia, sino cómo se mantiene en tiempos de controversia y desafío. - Martin Luther King Jr.",
        "El propósito de nuestras vidas es ser felices. - Dalai Lama",
        "La innovación distingue entre un líder y un seguidor. - Steve Jobs",
        "No importa lo lento que vayas mientras no te detengas. - Confucio",
        "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
        "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de alguien más. - Steve Jobs",
        "La calidad no es un acto, es un hábito. - Aristóteles",
        "Cree que puedes y estarás a mitad de camino. - Theodore Roosevelt"
    ];

    let frasesUsadas = cargarFrasesUsadas();

    let fraseAleatoria = generarFraseAleatoria(frasesFamosas, frasesUsadas);
    frasesUsadas.add(fraseAleatoria);
    frasesUsadas = limpiarFrasesUsadasAlUsarTodas(frasesFamosas, frasesUsadas);
    guardarFrasesUsadas(frasesUsadas);

    return fraseAleatoria;
}

function generarFraseAleatoria(frasesFamosas, frasesUsadas) {
    let fraseAleatoria;
    do {
        fraseAleatoria = frasesFamosas[ Math.floor( Math.random() * frasesFamosas.length ) ];
        console.log(fraseAleatoria);
    } while ( frasesUsadas.has(fraseAleatoria) );
    return fraseAleatoria;
}

function limpiarFrasesUsadasAlUsarTodas(frasesFamosas, frasesUsadas) {
    if ( frasesUsadas.size >= frasesFamosas.length )
        return new Set();
    return frasesUsadas;
}

function cargarFrasesUsadas() {
    try {
        let frasesUsadas = new Set(JSON.parse(localStorage.getItem("frasesUsadas")));
        return new Set(frasesUsadas);
    } catch (e) {
        console.error("Error al cargar frasesUsadas desde localStorage")
        return new Set();
    }
}

function guardarFrasesUsadas(frasesUsadas) {
    localStorage.setItem("frasesUsadas", JSON.stringify([...frasesUsadas]));
    console.log(frasesUsadas);
}
