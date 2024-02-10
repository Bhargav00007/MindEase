import { bwMed } from "./bw.js"
import { focusMed } from "./focus.js"
import { sleepMed } from "./sleep.js"
import { stressMed } from "./stress/stress.js"

export function meditationHome() {



    const stressDiv = document.createElement('div')
    stressDiv.className = 'eleDivs'
    stressDiv.id = 'stressDiv'
    stressDiv.textContent = "Stress"
    stressDiv.addEventListener('click', () => {
        container.textContent = ""
        stressMed()

    })
    container.appendChild(stressDiv)

    const focusDiv = document.createElement('div')
    focusDiv.className = 'eleDivs'
    focusDiv.id = 'focusDiv'
    focusDiv.textContent = "Focus"
    focusDiv.addEventListener('click', () => {
        container.textContent = ""
        focusMed()

    })
    container.appendChild(focusDiv)


    const sleepDiv = document.createElement('div')
    sleepDiv.className = 'eleDivs'
    sleepDiv.id = 'sleepDiv'
    sleepDiv.textContent = "Sleep"
    sleepDiv.addEventListener('click', () => {
        container.textContent = ""
        sleepMed()

    })
    container.appendChild(sleepDiv)

    const breathDiv = document.createElement('div')
    breathDiv.className = 'eleDivs'
    breathDiv.id = 'breathDiv'
    breathDiv.textContent = "BreathWork(WHM)"
    breathDiv.addEventListener('click', () => {
        container.textContent = ""
        bwMed()
    })
    container.appendChild(breathDiv)


}