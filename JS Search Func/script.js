
const api = document.querySelector('.apiData')
const searchBar = document.querySelector('#search')


function Cryptodata() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            displayData(data)
            search(data)
        })
}
Cryptodata()

function displayData(data) {

    data?.forEach((coin) => {
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        
    <div class="card">
    <img src="${coin.image}" alt="${coin.name}"  width="200" height="220"/>
    <div class="card__content">
        <p class="card__title">Name: ${coin.name}</p>
        <p class="card__title"> Price: ${coin.current_price}</p>
        <p class="card__title"> Symbol: ${coin.symbol}</p>
        <p class="card__description"> Market_cap: ${coin.market_cap}</p>
        <p class="card__title">Rank: ${coin.market_cap_rank}</p>
    </div>
    </div>
   `
        api.appendChild(div);

    })
}


function search(data){
  searchBar.addEventListener('input',(e)=>{
    const value = e.target.value

    const filterData = data?.filter((val)=>{
        return val.name.toLowerCase().includes(value.toLowerCase()) 
    })
    removeChildNodes()
    displayData(filterData)
  })
}

function removeChildNodes(){
    while (api.firstChild) {
        api.removeChild(api.firstChild);
        }
}











