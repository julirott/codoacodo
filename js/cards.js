//VARIABLES

let discount = null

//DOM

const cardsContainer = document.getElementsByClassName('btn card')


const colors = ['bg-primary','bg-danger','bg-success']
const transparent = 'bg-transparent'

const changeColor = (container,index,revert) => {

   
    const i = Number(index)
    revert 
    ? container.classList.replace(colors[i],transparent)
    : container.classList.replace(transparent,colors[i])

}

const matchCategory = (selection) => {

    switch (selection){
        case "0" : 
           form.category.value = 'a'
           category = 'a'
          
            break
        case "1" : 
            form.category.value = 'b'
            category = 'b'
             break        
        case "2" : 
            form.category.value = 'c'
            category = 'c'
             break    
        default:
            form.category.value = none     
    } 


}


//EVENTOS

const cardEnter = (e) => {
    const {index} = e.target.dataset
    
    
    changeColor(e.target,index, false)

      
}

const cardLeave = (e) => {  
    const {index} = e.target.dataset
    changeColor(e.target,index,true)
      
}
const cardClick = (e) => {
    discount = e.currentTarget.dataset.index
    
    matchCategory(discount)

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
    
        if (index !== discount) {
            eventosCard(container)
            changeColor(container,index,true)
        }
        
      
    
    }
}

eventsAll()

