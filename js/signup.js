let name = document.querySelector('.name')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let typePassword = document.querySelector('.type-password')
let regErr = document.querySelector('.h3')
let signup = document.querySelector('.signup')


let users = [
]
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
}

signup.addEventListener('click', () => {

    if (name.value !== '' && email.value !== '' && password.value !== '' && typePassword.value !== '') {

        const checkNewUser = users.find(user => user.email === email.value)
        if (checkNewUser) {
            regErr.innerHTML = 'bu istifadeci movcutdur'
            regErr.style.color = 'red'
        } else {
            let newUser = {
                id: users.length + 1,
                name: name.value,
                email: email.value,
                password: password.value,
                typePassword: typePassword.value
            }
            if (newUser.password != newUser.typePassword) {
                regErr.innerHTML = 'Sifreler eyni deyil'
                regErr.style.color = 'red'
            } else {
                users.push(newUser)
                localStorage.setItem('users', JSON.stringify(users))
                regErr.innerHTML = 'qeydiyyat ugurla bitti'
                regErr.style.color = 'green'
                window.location.pathname = 'html/login.html'
            }


        }

    }

})