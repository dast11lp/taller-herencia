
class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = String(nombre);
        this.cargo = String(cargo);
        this.salario = Number(salario);
        this.activo = true;
    }

    presentarse() {
        return `
        Cordial saludo
        
        Mi nombre es ${this.nombre},
        Mi cargo es ${this.cargo},
        `;
    }

    calcularSalarioAnual() {
        return this.salario * 12;
    }

    desactivar() {
        this.activo = false;
        return `${this.nombre} fue desactivado`;
    }

    info() {
        return `
        Nombre: ${this.nombre}
        Cargo: ${this.cargo}
        Salario mensual: ${this.salario}
        Activo: ${this.activo}
        `
    }
}

class Lider extends Empleado {
    constructor(nombre, salario, equipo = []) {
        super(nombre, "Lider de equipo", salario)
        this.equipo = equipo;
    }

    presentarEquipo() {
        let fraseinicial = `Los nombres del equipo son de ${this.nombre}: `

        for (const empleado of this.equipo) {
            if (empleado.activo) {
                fraseinicial = fraseinicial + ` 
                * ${empleado.nombre} `
            }
        }
        return fraseinicial;
    }

    agregarMiembro(empleado) {
        this.equipo.push(empleado);
        return `${empleado.nombre} agregado al equipo`;
    }

    info() {
        let activos = 0;

        for (const empleado of this.equipo) {
            if (empleado.activo) {
                activos++;
            }
        }

        return `
    Nombre: ${this.nombre}
    Cargo: ${this.cargo}
    Salario mensual: ${this.salario}
    Activo: ${this.activo}
    Personas del equipo: ${activos}
    ${this.presentarEquipo()}
    `;
    }
}


const equipo1 = [];
const equipo2 = [];

const empleado1 = new Empleado("Rodrigo", "desarrollador", 2500000);
const empleado2 = new Empleado("Pedro", "tester", 2500000);
const empleado3 = new Empleado("Mario", "desarrollador", 2500000);
const empleado4 = new Empleado("Anderson", "tester", 2500000);

const lider1 = new Lider("Juan", 5000000, equipo1);
const lider2 = new Lider("Pedro", 5000000, equipo2);

console.log(empleado1.presentarse());
console.log(empleado1.calcularSalarioAnual());
console.log(empleado1.info());

console.log(empleado2.presentarse());
console.log(empleado2.calcularSalarioAnual());
console.log(empleado2.info());

console.log(empleado3.presentarse());
console.log(empleado3.calcularSalarioAnual());
console.log(empleado3.info());


lider1.agregarMiembro(empleado1);
lider1.agregarMiembro(empleado2);

lider2.agregarMiembro(empleado3);
lider2.agregarMiembro(empleado4);

console.log(lider1.calcularSalarioAnual());
console.log(lider2.desactivar());

console.log(lider1.presentarEquipo());

const lideres = [lider1, lider2];

let salarioTotal = 0;

for (const lider of lideres) {
    for (const miembro of lider.equipo) {
        salarioTotal += miembro.salario;
    }
    salarioTotal += lider.salario;
}

console.log("Costo anual total:", salarioTotal * 12);

empleado1.desactivar();
console.log(empleado1.info());

console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log(lider2.info());
console.log(lider2.presentarEquipo());










