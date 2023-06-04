// VARIABLES

const precio = 200

const categorias = {
    a: {porcentaje: 80, value: 0},
    b: {porcentaje: 50, value: 1},
    c: {porcentaje: 15, value: 2}
}

const totalText = 'Total a Pagar: $ '

let categoria = null
let tickets = null
let total = null

//DOM
const form = document.forms.formulario


const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0]

const totalTag = document.getElementById('total')

const borrarBtn = document.getElementById('borrar')
const resumenBtn = document.getElementById('resumen')

totalTag.innerText = totalText

//UTILS

const totalPrice = () => {

    if (!cant || !categoria || isNaN (cant)) return;

    const totalValue = precio * cant
    const descuento = (totalValue / 100) * categorias[categoria].porcentaje
   
    total = totalValue - descuento
   
    totalTag.innerText = totalText + total

}

//EVENTOS

const resetCategoria = () => {
    total = null
    descuento = null
    eventsAll()
    totalTag.innerText = totalText
}

const setCategoria = (e) => {

    const option = e.target.value
    
    if (option === 'none'){
        resetCategoria()
        return
    }

    

    categoria = option
    const index = categorias[categoria].value

    const container = cardsContainer[index]

    
    descuento = index


    eventsAll()
   
    cambiarColor (container,index, false)

    totalPrice()

}

const setCant = (e) => {

    const {value} = e.target

    if (value <0 || isNaN (value)) {
   
        e.target.value=0
        total = null
        return
    }


    cant = value
    
    totalPrice()

}


// BOTONES

const limpiar = (e) => {

    e.preventDefault()

    for (let input of inputs)

    input.value = ''
    select.value = 'none'

    resetCategoria()


}

const submit = (e) => {
    e.preventDefault()
    
    const {nombre,apellido,correo, cant,categoria} = form

    const verify = {
        nombre: nombre.value !== '',
        apellido: apellido.value !== '',
        correo: correo.value.includes('@') ,
        cant: cant.value > 0,
        categoria: categoria.value !== 'none'
    }

    const values = Object.values(verify)

    const submitAceptado = values.every(value => value)

    if (submitAceptado){
        alert ('COMPRA EXITOSA!')
        location.href = './index.html'
    } else{
        let msj = "Debe completar el/los siguiente/s campo/s: \n"

        if (!values[0]) {msj = msj + "              Nombre\n"}
        if (!values[1]) {msj = msj + "              Apellido\n"}
        if (!values[2]) {msj = msj + "              Correo\n"}
        if (!values[3]) {msj = msj + "              Cantidad\n"}
        if (!values[4]) {msj = msj + "              Categoria\n"}

       alert (msj)
    }

    
    
    

}




form.categoria.addEventListener('change',setCategoria)
form.cant.addEventListener('keyup',setCant)

form.addEventListener('submit', submit)

borrarBtn.addEventListener('click',limpiar)
