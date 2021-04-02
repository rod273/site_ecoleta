function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {

        for( const state of state ) {

            ufSelect.innerHTML += `<option value="1">Valor</option>`
        }

        
    })
}


















//document.querySelector("select[name=uf]")
//.addEventListener("change", () => {
//    console.log('mudei')
//} )