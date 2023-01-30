const loanding = document.querySelector('.load')
const inputCountry = document.querySelector('input#search-country')

// var population; // número da população formatado
async function getCountries() {
    await fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((data) => {
            const ul = document.querySelector('#fill_list')
            loanding.classList.add('hide')
            data.map((item) => {
                let population = (new Intl.NumberFormat('de-DE').format(item.population))
                const li = document.createElement('li')
                li.innerHTML =
                    ` <img src="${item.flags.png}" alt="">
                <div class="info">
                    <h3>${item.name}</h3>
                    <p><span>Population:</span> ${population}</p>
                    <p><span>region:</span> ${item.region}</p>
                    <p><span>capital:</span> ${item.capital}</p>
                </div> `

                ul.appendChild(li)
            })

        })
}

getCountries()


inputCountry.addEventListener('input', async () => {
    const name = inputCountry.value;
    console.log(name)
    const response = await fetch(`https://restcountries.com/v2/name/${name}`)
    const data = await response.json()
    console.log(data)
    const ul = document.querySelector('#fill_list')
    ul.innerHTML = "" // limpa a ul pra poder mostar o resultado da pesquisa
    if (data.length > 0) {
        data.map((item) => {
            let population = (new Intl.NumberFormat('de-DE').format(item.population))
            const li = document.createElement('li')
            li.innerHTML =
                `<img src="${item.flag}" alt="">
             <div class="info">
                 <h3>${item.name}</h3>
                <p><span>Population:</span> ${population}</p>
                <p><span>region:</span> ${item.region}</p>
                <p><span>capital:</span> ${item.capital}</p>
            </div> `

            ul.appendChild(li)
        })
    } else if (inputCountry.value == '') {
        getCountries()
    }
    else {
        ul.innerHTML = `<p class='result-search-null'>Nenhum país encontrado</p>`
    }

})



const inputRegion = document.querySelector('input#search-region')
const regionsOperations = document.querySelectorAll('.list-region>button')

const optionRegions = document.querySelector('.list-region')
inputRegion.addEventListener('click', () => {
    optionRegions.style.display = 'flex'
})
inputRegion.addEventListener('mousedown', () => {
    optionRegions.style.display = 'none'
})


let region;

regionsOperations.forEach(element => {
    element.addEventListener('click', (e) => {
        region = e.target.textContent
        inputRegion.value = e.target.textContent
        const optionRegions = document.querySelector('.list-region')
        optionRegions.style.display = 'none'
        getValueOption()
    })
});

async function getValueOption() {
    if (inputRegion != "") {
        console.log(region)
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        console.log(response)
        const data = await response.json()
        console.log(data)
        const ul = document.querySelector('#fill_list')
        ul.innerHTML = "";
        if (data.length > 0) {
            data.map((item) => {
                let population = (new Intl.NumberFormat('de-DE').format(item.population))
                const li = document.createElement('li')
                li.innerHTML =
                    `<img src="${item.flags.png}" alt="">
                     <div class="info">
                         <h3>${item.name.common}</h3>
                        <p><span>Population:</span>${population}</p>
                        <p><span>region:</span> ${item.region}</p>
                        <p><span>capital:</span> ${item.capital}</p>
                     </div> `

                ul.appendChild(li)
            })
        } else if (inputRegion.value == '') {
            getCountries()
        }

    }

}


var numero = 1524663288;

// O alemão usa vírgula como separador de decimal e ponto para milhares
console.log;
// → 123.456,789





