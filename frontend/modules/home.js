import { meditationHome } from "./meditation/meditationHome.js"
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
    home.appendChild(chatbotDiv)

    const moodtrackerDiv = document.createElement('div')
    moodtrackerDiv.className = 'eleDivs'
    moodtrackerDiv.id = 'moodtrackerDiv'
    moodtrackerDiv.textContent = "Mood Tracker"
    moodtrackerDiv.onclick = () => {
        signinPage()
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
    }
    home.appendChild(therapyDiv)

    const emergencyDiv = document.createElement('div')
    emergencyDiv.className = 'eleDivs'
    emergencyDiv.id = 'emergencyDiv'
    emergencyDiv.textContent = "Emergency"
    emergencyDiv.onclick = () => {
    }
    home.appendChild(emergencyDiv)

    container.appendChild(home)
}