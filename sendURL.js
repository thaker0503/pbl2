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
        // app.innerHTML += JSON.stringify(d.data)
        neatJSON(d)
    })
}

function neatJSON(d) {
    const code = document.getElementById("code");
    console.log(code)
    code.innerHTML = JSON.stringify(d, null, 2);
}