// import { website } from './checkWebsite';
import { sendUrl } from './sendURL.js';
import './style.css'
// import javascriptLogo from './javascript.svg'

const app = document.querySelector('#app');

app.innerHTML = `
  <div>
    URL: <input type="url" id="url" />
    <button id="button">Check website</button>
  </div>
`

const button = document.querySelector('#button')

button.addEventListener('click', () => {
  document.getElementById("code").innerHTML = "Loading..."
  const url = document.querySelector('#url').value
  console.log('button clicked')
  console.log(url)
  sendUrl(url)
});
