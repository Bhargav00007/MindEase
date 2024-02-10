import { emergencyHome } from "../emergency/emeragencyHome.js"
import { meditationHome } from "./meditation/meditationHome.js"
import { mt } from "./mt.js"
import { therapyhome } from "./therapyHome.js"
// import { signinPage } from "./signin"

export function home() {

    const video = document.createElement('video');
    // Set the attributes
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.style.background = 'linear-gradient(to bottom right, black, white)';


    // Create the source element
    const source = document.createElement('source');
    source.setAttribute('src', './modules/videos/bg4.mp4');
    source.setAttribute('type', 'video/mp4');

    // Append the source element to the video element
    video.appendChild(source);

    video.style.position = 'absolute';
    video.style.right = '0';
    video.style.bottom = '0';
    video.style.zIndex = '-1';
    video.style.background = 'cover'
    // Append the video element to the container (assuming container is already defined)
    container.appendChild(video);


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

    const chatbotDiv = document.createElement('div')
    chatbotDiv.className = 'eleDivs'
    chatbotDiv.id = 'chatbotDiv'
    chatbotDiv.textContent = "Chat Bot"
    chatbotDiv.addEventListener('click', () => {
        window.location.href = 'https://mediafiles.botpress.cloud/321199da-2b7b-4f09-9f0c-7400778a25d1/webchat/bot.html'
    })

    const moodtrackerDiv = document.createElement('div')
    moodtrackerDiv.className = 'eleDivs'
    moodtrackerDiv.id = 'moodtrackerDiv'
    moodtrackerDiv.textContent = "Mood Tracker"
    moodtrackerDiv.addEventListener('click', () => {
        window.location.href = 'moodtracker.html'
    })


    const echochamberDiv = document.createElement('div')
    echochamberDiv.className = 'eleDivs'
    echochamberDiv.id = 'echochamberDiv'
    echochamberDiv.textContent = "Echo Chamber"
    echochamberDiv.addEventListener('click', () => {
        window.location.href = 'https://echochamber.adaptable.app/'
    })

    const therapyDiv = document.createElement('div')
    therapyDiv.className = 'eleDivs'
    therapyDiv.id = 'therapyDiv'
    therapyDiv.textContent = "Therapy"
    therapyDiv.onclick = () => {
        container.textContent = ''
        therapyhome()

    }

    const emergencyDiv = document.createElement('div')
    emergencyDiv.className = 'eleDivs'
    emergencyDiv.id = 'emergencyDiv'
    emergencyDiv.textContent = "Emergency"
    emergencyDiv.addEventListener('click', () => {
        container.textContent = "";
        emergencyHome()
    })
    home.appendChild(meditationDiv)
    home.appendChild(emergencyDiv)
    home.appendChild(therapyDiv)
    home.appendChild(moodtrackerDiv)
    home.appendChild(echochamberDiv)
    home.appendChild(chatbotDiv)

    container.appendChild(home)
}