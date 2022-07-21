const update = document.querySelector('input[type="submit"]')
update.addEventListener('click', () => {
    const data = new URLSearchParams(new FormData(document.querySelector('form')))
    console.log(document.cookie)
    var status
    fetch("https://api.m0hammadreza.ir/v2/Model.php", {
            method: "PUT",
            credentials: 'include',
            mode: 'cors',
            body: data
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

})