let id = crypto.randomUUID()

console.log(id)

document.querySelector('#clientid-fill').innerHTML = id

document.querySelector('#more').addEventListener('click', () => {
  if (document.querySelector('#info-more').classList.contains('hidden')) {
    document.querySelector('#more').innerHTML = 'Less Info'
  } else {
    document.querySelector('#more').innerHTML = 'More Info'
  }
  document.querySelector('#info-more').classList.toggle('hidden')
})
function captchaSucess() {
  console.log('captchacomplete')
}
