class Propetario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    datosPropietrario() {
        return `El nombre del dueño(a) es: ${this._nombre}, el domicilio es: ${this._direccion} y el número telecónico de contacto es: ${this._telefono}`
    }
}

let propietario1 = new Propetario("Rafael", "El Carmen", "telefono")
console.log(propietario1.datosPropietrario())

class Animal extends Propetario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}
let animal1 = new Animal("Rafael", "El Carmen", "telefono", "gato");
console.log(animal1._tipo)

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    set nombreMascota(nuevoNombre) {
        this._nombreMascota = nuevoNombre
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad
    }
}

//let mascota1 = new Mascota("Rafael", "El Carmen", "telefono", "gato", "Michi", "gripe");
//console.log(mascota1)

let formulario = document.querySelector('form');

//console.log(documnet.getElementById('propietario1').value)
let agregando = (event) => {
    event.preventDefault()
    let propietario = document.getElementById('propietario2').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
    let tipo = document.getElementById('tipo').value
    let nombreM = document.getElementById('nombreMascota').value
    let enfermedad = document.getElementById('enfermedad').value


    switch (tipo) {
        case 'perro':
            let perro = new Mascota(propietario, telefono, direccion, tipo, nombreM, enfermedad)
            mostrarResultado(perro)
            break
        case 'gato':
            let gato = new Mascota(propietario, telefono, direccion, tipo, nombreM, enfermedad)
            mostrarResultado(gato)
            break
        case 'conejo':
            let conejo = new Mascota(propietario, telefono, direccion, tipo, nombreM, enfermedad)
            mostrarResultado(conejo)
            break
        default:
            break
    }
}

let mostrarResultado = (valor) => {
    let resultado = document.querySelector('#resultado ul')
    resultado.innerHTML = "";
    let li1 = document.createElement('li')
    li1.innerHTML = `${valor.datosPropietrario()}`;
    let li2 = document.createElement('li')
    li2.innerHTML = `El tipo de animal es un: ${valor._tipo}, mientras que el nombre de la mascota: ${valor._nombreMascota} y la enfermedad es: ${valor._enfermedad}`
    resultado.appendChild(li1)
    resultado.appendChild(li2)
}

formulario.addEventListener('submit', agregando);
