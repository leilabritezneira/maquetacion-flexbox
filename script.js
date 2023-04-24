const navbar = document.querySelector("#nav-principal");
const sectionHistorias = document.querySelector("section");

// entradas, y observador con argumentos
const changeBackgroundColor = (entries, observer) => {
    // console.log(entries);
    // console.log(observer);

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log("Dentro del vierport");
            navbar.classList.add("background-white");
        } else {
            // console.log("Saliendo del viewport");
            navbar.classList.remove("background-white");
        }
    });
};

// creo al observador (observer) que vigilara al elemento
// primero debo pasarle la función que quiero que se ejecute cuando el elemento entre al viewport.
// el segundo argumento debe ser un objeto con varias propiedades.
const observer = new IntersectionObserver(changeBackgroundColor, {
    // le paso el elemento con el que quiero que interactue, al pasarle null
    // le indico que que el elemento con el que interactuo es el viewport.
    root: null,

    // con rootMargin
    // agrego margenes al observador, los cuales pueden ser diferentes
    // al viewport y permite cambiar el espacio donde el observador actuará.
    // el valor por default es 0
    // al igual que en css los margenes van en orden ⬆➡⬇⬅
    // rootMargin: '0px 10px 20px 5px',

    // threshold me permite seleccionar CUANDO quiero que se ejecute la función
    // (ej. cuando TODA el elemento aparece en el viewport).
    // va desde 0.0, 0.1,..., pasando por 0.5 indicando que la mitad
    // del elemento se encuantra dentro del viewport, ..., hasta 1.0
    threshold: 0.1
});

// ahora le indico al observador a qué elementos quiero que observe:
observer.observe(sectionHistorias);
