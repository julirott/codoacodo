//VARIABLES

let descuento = null

//DOM

const cardsContainer = document.getElementsByClassName('btn card')


const colors = ['bg-primary','bg-danger','bg-success']
const transparent = 'bg-transparent'

const cambiarColor = (container,index,revert) => {

   
    const i = Number(index)
    revert 
    ? container.classList.replace(colors[i],transparent)
    : container.classList.replace(transparent,colors[i])

}

const matchCategory = (selection) => {

    switch (selection){
        case "0" : 
           form.categoria.value = 'a'
           categoria = 'a'
          
            break
        case "1" : 
            form.categoria.value = 'b'
            categoria = 'b'
             break        
        case "2" : 
            form.categoria.value = 'c'
            categoria = 'c'
             break    
        default:
            form.categoria.value = none     
    } 


}


//EVENTOS

const cardEnter = (e) => {
    const {index} = e.target.dataset
    
    
    cambiarColor(e.target,index, false)

      
}

const cardLeave = (e) => {  
    const {index} = e.target.dataset
    cambiarColor(e.target,index,true)
      
}
const cardClick = (e) => {
    descuento = e.currentTarget.dataset.index
    
    matchCategory(descuento)

    eventsAll()
    totalPrice()
}


const eventosCardClean = (container) => {
    container.removeEventListener('mouseenter', cardEnter)
    container.removeEventListener('mouseleave', cardLeave)
    container.removeEventListener('click', cardClick)

}


const eventosCard = (container) => {
    container.addEventListener('mouseenter', cardEnter)
    container.addEventListener('mouseleave', cardLeave)
    container.addEventListener('click', cardClick)

}

const eventsAll = () => {

    for (let container of cardsContainer ){

        eventosCardClean (container)

        const {index} = container.dataset
    
        if (index !== descuento) {
            eventosCard(container)
            cambiarColor(container,index,true)
        }
        
      
    
    }
}

eventsAll()

