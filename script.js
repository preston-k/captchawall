if (window.location.href.includes('.com')) {
  console.log = function () {}
}

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
function bgScore() {
  console.log('v3 Run')
}
grecaptcha.ready(() => {
  grecaptcha.execute('6Lc-hZwqAAAAAIG6M1p_Wwrs83Fgtja9aci8JZrS', { action: 'homepage' }).then((token) => {
    console.log('reCAPTCHA token:', token)
  })
})
function captchaSucess() {
  console.log('captchacomplete')
  document.querySelector('#bouncer-wrap').style.display = 'flex'
}
