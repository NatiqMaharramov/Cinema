let email = document.querySelector('.email')
let password = document.querySelector('.password')
let logErr = document.querySelector('.h3')
let btnLogin = document.querySelector('.btnLogin')
let goHome = document.querySelector('#goHome')

btnLogin.addEventListener('click', () => {
    if (email.value !== '' && password.value !== '') {
        let succed = JSON.parse(localStorage.getItem('users'))
        let u1 = succed.find(succed => succed.email === email.value)

        if (u1.password === password.value) {
            goHome.href='../index.html'
        } else {
            logErr.style.color = 'red'
            logErr.innerHTML = 'parol yanlisdir'

        }



    } else {
        logErr.innerHTML = 'xanalari doldurun'
        logErr.style.color = 'red'
    }


})