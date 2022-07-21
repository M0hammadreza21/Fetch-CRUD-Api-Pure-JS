const signup = document.querySelector('.signup')
const login = document.querySelector('.login')
const update = document.querySelector('.update')

signup.addEventListener('click', () => location.href = "https://api.m0hammadreza.ir/v2/frontend/register.html")
login.addEventListener('click', () => location.href = "https://api.m0hammadreza.ir/v2/frontend/login.html")
update.addEventListener('click', () => location.href = "https://api.m0hammadreza.ir/v2/frontend/update.html")

const logout = document.querySelector(".logout")
const dlt = document.querySelector(".unsubscribe")

logout.addEventListener('click', () => {

    fetch("https://api.m0hammadreza.ir/v2/Model.php", {

            credentials: 'include',
            mode: 'cors'
        })
        .then(res => res.text())
        .then(data => {
            alert(data)
            location.href = 'index.html'
        })
})

dlt.addEventListener('click', () => {
    fetch('https://api.m0hammadreza.ir/v2/Model.php', {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors'
        })
        .then(res => res.text())
        .then(data => {
            alert(data)
        })
})