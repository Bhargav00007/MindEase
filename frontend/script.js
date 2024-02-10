import { signupPage } from "./modules/signup.js"
import { signinPage } from "./modules/signin.js"
import { home } from "./modules/home.js"
import { stressMed } from "./modules/meditation/stress/stress.js"
import { emergencyHome } from "./emergency/emeragencyHome.js"
import { therapyhome } from "./modules/therapyHome.js"

let container = document.getElementById('container')

const logo = document.getElementById('logo')

logo.addEventListener('click', () => {
    container.textContent = ''
    home()
})



signupPage()
// signinPage()
// home()
// stressMed()
// emergencyHome()
// therapyhome()