class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return `
    Título: ${this.titulo}
    Género: ${this.genero}
    Año:    ${this.anio}`
    }

    retirar() {
        this.disponible = false;
        return `El título ${this.titulo} ha sido retirado`
    }

    estado() {
        return `El contenido se encuentra ${this.disponible ? 'disponible' : 'no disponible'}`
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const mins = this.duracion % 60;
        return `${horas}h ${mins}min`;
    }

    ficha() {
        return `
    Título:     ${this.titulo}
    Género:     ${this.genero}
    Año:        ${this.anio}
    Duración:   ${this.duracionFormateada()}`
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio)
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `
    Título:          ${this.titulo}
    Género:          ${this.genero}
    Año:             ${this.anio}
    Temporadas:      ${this.temporadas}
    Total episodios: ${this.totalEpisodios()}`
    }
}

const pelicula1 = new Pelicula("El Señor de los anillos", "Fantasía", "2000", 180);
const pelicula2 = new Pelicula("Orgullo y prejuicio", "Romance", "2002", 120);
const pelicula3 = new Pelicula("Star wars", "Ciencia ficción", "2006", 120);

const serie1 = new Serie("Juego de tronos", "Fantasía", "2014", 10);
const serie2 = new Serie("Pokemon", "Anime", "1990", 25);
const serie3 = new Serie("The big bang theory", "Comedia", "2006", 12);


serie1.registrarEpisodios(5)
serie2.registrarEpisodios(6)
serie3.registrarEpisodios(10)

const catalogo = [
    pelicula1,
    pelicula2,
    pelicula3,
    serie1,
    serie2,
    serie3
];

for (const contenido of catalogo) {
    console.log(contenido.ficha());
}



pelicula1.retirar()
serie1.retirar()

console.log(pelicula1.estado());
console.log(serie1.estado());

console.log(pelicula2.estado());
console.log(serie2.estado());

let contadorDisponible = 0;

for (const contenido of catalogo) {
    
    if (contenido.disponible === true){
        contadorDisponible++;
    }
}

console.log(`Elementos disponibles: ${contadorDisponible}`);
