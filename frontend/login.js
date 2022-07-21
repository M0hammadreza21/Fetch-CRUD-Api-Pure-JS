const login = document.querySelector('button')
login.addEventListener('click', () => {
    const formData = new FormData(document.querySelector('form'))
    var status
    fetch('https://api.m0hammadreza.ir/v2/Model.php', {
            'method': 'POST',
            // headers: {
            //     origin: 'http://127.0.0.1:5500'
            // },
            'body': formData,
            mode: 'cors',
            credentials: 'include'
        })
        .then(res => {
            status = res.status
            console.log('user cookies is ')
            console.log(res.headers.get('user'))
            return res.text()
        })
        .then(data => {
            console.log(document.cookie)
            alert(data)
            if (status == 200)
                location.href = "https://api.m0hammadreza.ir/v2/frontend/index.html"
        })
        .catch(err => {

            console.log(err)
        })

})