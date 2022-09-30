const app = document.querySelector('#app');

export function sendUrl(url) {
    fetch("https://urldetectapi.herokuapp.com/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            url: url
        })
    }).then(r => r.json()).then(d => {
        console.log(d)
        app.innerHTML += JSON.stringify(d.data)
    })
}