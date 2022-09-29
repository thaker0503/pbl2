import { website } from './checkWebsite';
import './style.css'
// import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    URL: <input type="url" id="url" />
    <button id="button">Check website</button>
  </div>
`

const button = document.querySelector('#button')

button.addEventListener('click', () => {
  const url = document.querySelector('#url').value
  console.log('button clicked')
  console.log(url)
  website(url)
});
