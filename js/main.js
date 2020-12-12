const coinsContainer = document.querySelector('#listaprod')
// const prodi = prod
prod.map(coin => {
  console.log(coin.Name)
})

const coinsHTML = prod.map(coin => {
    return `<div class="coin">
          <p>${coin.FullName}</p>
          <p class="quant">Quantidade: ${coin.TotalCoinSupply}</p>
        </div>`
  })
  .join('')

coinsContainer.innerHTML = coinsHTML