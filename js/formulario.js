// VARIABLES

const price = 200

const categorys = {
    a: {perc: 80, value: 0},
    b: {perc: 50, value: 1},
    c: {perc: 15, value: 2}
}

const totalText = 'Total a Pagar: $ '

let category = null
let tickets = null
let total = null

//DOM
const form = document.forms.formulario


const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0]

const totalTag = document.getElementById('total')

const cleanBtn = document.getElementById('clean')
const summaryBtn = document.getElementById('summary')

totalTag.innerText = totalText

//UTILS

const totalPrice = () => {

    if (!cant || !category || isNaN (cant)) return;

    const totalValue = price * cant
    const discount = (totalValue / 100) * categorys[category].perc
   
    total = totalValue - discount
   
    totalTag.innerText = totalText + total

}

//EVENTOS

const resetCategory = () => {
    total = null
    discount = null
    eventsAll()
    totalTag.innerText = totalText
}

const setCategory = (e) => {

    const option = e.target.value
    
    if (option === 'none'){
        resetCategory()
        return
    }

    

    category = option
    const index = categorys[category].value

    const container = cardsContainer[index]

    
    discount = index


    eventsAll()
   
    changeColor (container,index, false)



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

const clean = (e) => {

    e.preventDefault()

    for (let input of inputs)

    input.value = ''
    select.value = 'none'

    resetCategory()


}

const submit = (e) => {
    e.preventDefault()
    
    const {nombre,apellido,correo, cant,category} = form

    const verify = {
        nombre: nombre.value !== '',
        apellido: apellido.value !== '',
        correo: correo.value.includes('@') ,
        cant: cant.value > 0,
        category: category.value !== 'none'
    }

    const values = Object.values(verify)

    const submitAcept = values.every(value => value)

    if (submitAcept){
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


form.category.addEventListener('change',setCategory)
form.cant.addEventListener('keyup',setCant)
form.cant.addEventListener('change',setCant)

form.addEventListener('submit', submit)

cleanBtn.addEventListener('click',clean)
