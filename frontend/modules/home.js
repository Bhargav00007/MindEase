import { emergencyHome } from "../emergency/emeragencyHome.js"
import { meditationHome } from "./meditation/meditationHome.js"
import { mt } from "./mt.js"
import { therapyhome } from "./therapyHome.js"
// import { signinPage } from "./signin"

export function home() {
    const home = document.createElement("div")
    home.id = 'home'


    const meditationDiv = document.createElement('div')
    meditationDiv.className = 'eleDivs'
    meditationDiv.id = 'meditationDiv'
    meditationDiv.textContent = "Meditation"
    meditationDiv.addEventListener('click', () => {
        container.textContent = "";
        meditationHome()
    })
    home.appendChild(meditationDiv)

    const chatbotDiv = document.createElement('div')
    chatbotDiv.className = 'eleDivs'
    chatbotDiv.id = 'chatbotDiv'
    chatbotDiv.textContent = "Chat Bot"
    chatbotDiv.addEventListener('click', () => {
        window.location.href = 'https://mediafiles.botpress.cloud/321199da-2b7b-4f09-9f0c-7400778a25d1/webchat/bot.html'
    })
    home.appendChild(chatbotDiv)

    const moodtrackerDiv = document.createElement('div')
    moodtrackerDiv.className = 'eleDivs'
    moodtrackerDiv.id = 'moodtrackerDiv'
    moodtrackerDiv.textContent = "Mood Tracker"
    moodtrackerDiv.onclick = () => {
        mt()
    }
    home.appendChild(moodtrackerDiv)


    const echochamberDiv = document.createElement('div')
    echochamberDiv.className = 'eleDivs'
    echochamberDiv.id = 'echochamberDiv'
    echochamberDiv.textContent = "Echo Chamber"
    echochamberDiv.onclick = () => {
    }
    home.appendChild(echochamberDiv)

    const therapyDiv = document.createElement('div')
    therapyDiv.className = 'eleDivs'
    therapyDiv.id = 'therapyDiv'
    therapyDiv.textContent = "Therapy"
    therapyDiv.onclick = () => {
        container.textContent = ''
        therapyhome()

    }
    home.appendChild(therapyDiv)

    const emergencyDiv = document.createElement('div')
    emergencyDiv.className = 'eleDivs'
    emergencyDiv.id = 'emergencyDiv'
    emergencyDiv.textContent = "Emergency"
    emergencyDiv.addEventListener('click', () => {
        container.textContent = "";
        emergencyHome()
    })
    home.appendChild(emergencyDiv)

    container.appendChild(home)
}