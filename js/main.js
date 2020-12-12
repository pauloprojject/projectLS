const coinsContainer = document.querySelector('#listaprod')

const coinsData = Object.values(coins.Data)
  .map(coin => {
    return {
      "name": coin.FullName
    }
  })

const coinsHTML = coinsData.map(coin => {
    return `<div class="coin">
          <p>${coin.FullName}</p>
          <p class="quant">Quantidade: ${coin.TotalCoinSupply}</p>
        </div>`
  })
  .join('')

coinsContainer.innerHTML = coinsHTML