import datauri from '/Users/PICHAU/node_modules/datauri'
// let con = await datauri('img/jeff.jpeg')
// console.log(con)
const btn = document.querySelector('#btn')
btn.addEventListener('click', async e =>{
    e.preventDefault()
    let a = document.querySelector('#img')
    let con = await datauri(a.value)
    console.log(con)
})