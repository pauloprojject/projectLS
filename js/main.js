const coinsContainer = document.querySelector('#listaprod')
// const prodi = prod
prod.map(coin => {
  console.log(coin.Name)
})

const coinsHTML = prod.map(products => {
    return `<div class="coin">
          <img src="${products.ImgUrl}">
          <p class="prod">${products.Name}</p>
          <p class="quant">Quantidade: ${products.Quantidade}</p>
        </div>`
  })
  .join('')

coinsContainer.innerHTML = coinsHTML