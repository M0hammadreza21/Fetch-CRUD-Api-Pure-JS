const register = document.querySelector('input[type="submit"]')
register.addEventListener('click', () => {
    var status
    const formData = new FormData(document.querySelector('form'));
    console.log(formData.get('pwd'));
    fetch('https://api.m0hammadreza.ir/v2/Model.php', {
            'method': "POST",
            'body': formData,
        })
        .then(res => {
            status = res.status
            return res.text()
        })
        .then(data => {
            alert(data)
            if (status == 200)
                location.href = "https://api.m0hammadreza.ir/v2/frontend/index.html"
        })
        .catch(err => { console.log(err) })
})