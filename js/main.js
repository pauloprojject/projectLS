const coinsContainer = document.querySelector('#listaprod')
// const prodi = prod
prod.map(coin => {
  // console.log(coin.Name)
})

const coinsHTML = prod.map(products => {
    return `<div class="prod">
          <a href="pages/${products.Name}.html">
          <img src="${products.ImgUrl}"></a>
          <p class="nome-prod">${products.Name}</p>
          <p class="quant">Quantidade: ${products.Quantidade}</p>
          
        </div>`
  })
  .join('')

// coinsContainer.innerHTML = coinsHTML


let inserir = () => {
  let a = document.querySelector('.descricao span')
  let b = document.querySelector('.descricao h1')
  let c = document.querySelector('.descricao p')
  let d = document.querySelector('.preco span')
  let e = document.querySelector('.detalhes p')
  let url = window.location.href
  f = url.split('/')
  g = f[4].split('.')
  prod.map(item => {
    if (item.Name == g[0]){
      a.innerHTML = item.IdProduto
      b.innerHTML = item.Name
      c.innerHTML = item.FullName
      d.innerHTML = item.Value
      e.innerHTML = item.Description
    }
  })
}

inserir()