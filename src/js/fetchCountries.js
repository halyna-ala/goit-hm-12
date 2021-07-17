import markupOfSingleCountry from ''
import markupOfFewCountries from ''
import Notiflix from "notiflix";


const BASIC_URL = 'https://restcountries.eu/rest/v2/name/';
const OPTIONS = 'fields=name;capital;population;flag;languages'
const markup = document.querySelector('.country-list')

function fetchCountries() {
    fetch(`${BASIC_URL}${this.value}?${OPTIONS}`)
    .then(response =>{
        ;
        return response.json()
    })
.then(country => {
            markup.innerHTML = '';

})
.catch(error => {
                        console.log(error)
                    })
}

export {fetchCountries}