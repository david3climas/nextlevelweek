function popularUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {

            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }            
        })
}

popularUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ""
    citySelect.disabled = true

    fetch(url)
        .then( res => res.json() )
        .then( cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }      
            citySelect.disabled = false      
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleteta
const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
   const itemLi = event.target

   itemLi.classList.toggle("selected")

   const itemId = event.target.dataset.id

   //verificar se exite itens selecionados
   //se sim, pegar itens selecionados

   const alreadySelected = selectedItems.findIndex( function(item){
       const itemfound = item == itemId
       return itemfound
   })

   //Se já estiver selecionado, então, tirar
   //da seleção.
   if ( alreadySelected >= 0 ){
       //tira a seleção
       const filteredItems = selectedItems.filter(item => {
           const itemIsDifferent = item != itemId // false
           return itemIsDifferent
       })
       selectedItems = filteredItems
   } else {
        //Se não estiver selecionado
        //adicionar a seleção
        selectedItems.push(itemId)
   }
   //atualizar o campo escondido com os itens selecionados
   collectedItems.value = selectedItems
}

