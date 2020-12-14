const productsContainer = document.querySelector('#listaprod')


const productsHTML = prod.map(products => {
    return `<div class="prod">
          <a href="pages/${products.Name}.html">
          <img src="${products.ImgUrl}"></a>
          <p class="nome-prod">${products.Name}</p>
          <p class="quant">Quantidade: ${products.Quantidade}</p>
          
        </div>`
      })
  .join('')

let ulr = window.location.href
let a = ulr.split('/')
if (a[3] !== 'pages'){
  productsContainer.innerHTML = productsHTML
}

let inserir = () => {
  let a = document.querySelector('.descricao span')
  let b = document.querySelector('.descricao h1')
  let c = document.querySelector('.descricao p')
  let d = document.querySelector('.preco span')
  let e = document.querySelector('.detalhes p')
  let url = window.location.href
  f = url.split('/')
  g = f[5].split('.')
  prod.map(item => {
    if (item.Name == g[0]){
      a.innerHTML = `Referência: #${item.IdProduto}`
      b.innerHTML = item.Name
      c.innerHTML = item.FullName
      d.innerHTML = item.Value
      e.innerHTML = item.Description
    }
  })
  if (b.innerHTML == 'Whey-Protein'){
    j = b.innerHTML
    console.log(j.split('-'))
    b.innerHTML = j.split('-').join(' ')
  }
  if (b.innerHTML == 'Biotonico-Fontoura'){
    j = b.innerHTML
    b.innerHTML = j.replace('o', 'ô')
  }
}

let b = ulr.split('/')
if (b[3] === 'pages'){
  inserir()
}
