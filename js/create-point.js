function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {

        for(  state of states ) {

            ufSelect.innerHTML += ` <option value="${state.id}">${state.nome}</option> `
        }

    })
}


populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then(cities => {

        for(  city of cities ) {

            citySelect.innerHTML += ` <option value="${city.nome}">${city.nome}</option> `
        }

        citySelect.disabled = false

    })
}


document.querySelector("select[name=uf]")
.addEventListener("change", getCities)



// ITENS DE COLETA
//PEGAR TODOS OS LI

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}


 const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //ADICIONAR OU REMOVER UMA CLASSE COM JAVASCRIPT
    itemLi.classList.toggle("selected")

    const intemId = itemLi.dataset.id


    //verificar se existem itens selecionados, se sim 
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item =>  {
        const itemFound = item == intemId
        return itemFound
    })


    //se ja estiver selecionado
    if(alreadySelected >= 0) {
    
    //tirar da seleção
       const filteredItems = selectedItems.filter( item => {
           const itemIsDifferent = item != intemId
           return itemIsDifferent
       })
       
       selectedItems = filteredItems
    } else {
        //se nao estiver selecionado, adicionar a seleção
        selectedItems.push(intemId)
    }

   //atualizar o campo escondido com os itens selecioandos
   collectedItems.value = selectedItems
}
