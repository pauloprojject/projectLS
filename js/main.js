const coinsContainer = document.querySelector('#listaprod')
// const prodi = prod
prod.map(coin => {
  console.log(coin.Name)
})

const coinsHTML = prod.map(products => {
    return `<div class="prod">
          <img src="${products.ImgUrl}">
          <p class="nome-prod">${products.Name}</p>
          <p class="quant">Quantidade: ${products.Quantidade}</p>
        </div>`
  })
  .join('')

coinsContainer.innerHTML = coinsHTML