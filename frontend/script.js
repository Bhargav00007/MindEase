import { signupPage } from "./modules/signup.js"
import { home } from "./modules/home.js"
import { mt } from "./modules/mt.js"


let container = document.getElementById('container')

const logo = document.getElementById('logo')



logo.addEventListener('click', () => {
    container.textContent = ''

    home()
    // mt()
})



signupPage()
