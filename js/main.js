const productsContainer = document.querySelector('#listaprod')

prod.map(product => {
  console.log(product.Name)
})

const productsHTML = prod.map(products => {
    return `<div class="prod">
          <a href="pages/${products.Name}.html">
          <img src="${products.ImgUrl}"></a>
          <p class="nome-prod">${products.Name}</p>
          <p class="quant">Quantidade: ${products.Quantidade}</p>
          
        </div>`
      })
  .join('')

productsContainer.innerHTML = productsHTML