let id = crypto.randomUUID()

console.log(id)

document.querySelector('#clientid-fill').innerHTML = id

function captchaSucess() {
  console.log('captchacomplete')
}
