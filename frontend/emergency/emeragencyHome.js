

export function emergencyHome() {



    const stressDiv = document.createElement('div')
    stressDiv.className = 'eleDivs'
    stressDiv.id = 'stressDiv'
    stressDiv.textContent = "Stress"
    stressDiv.addEventListener('click', () => {
        container.textContent = ""
        stressE()

    })
    container.appendChild(stressDiv)

    const griefDiv = document.createElement('div')
    griefDiv.className = 'eleDivs'
    griefDiv.id = 'griefDiv'
    griefDiv.textContent = "Grief"
    griefDiv.addEventListener('click', () => {
        container.textContent = ""
        griefE()

    })
    container.appendChild(griefDiv)


    const panicDiv = document.createElement('div')
    panicDiv.className = 'eleDivs'
    panicDiv.id = 'panicDiv'
    panicDiv.textContent = "Panic"
    panicDiv.addEventListener('click', () => {
        container.textContent = ""
        panicE()

    })

    container.appendChild(panicDiv)

    const angryDiv = document.createElement('div')
    angryDiv.className = 'eleDivs'
    angryDiv.id = 'angryDiv'
    angryDiv.textContent = "Angry"
    angryDiv.addEventListener('click', () => {
        container.textContent = ""
        angryE()
    })
    container.appendChild(angryDiv)

    const fearDiv = document.createElement('div')
    fearDiv.className = 'eleDivs'
    fearDiv.id = 'fearDiv'
    fearDiv.textContent = "Fear"
    fearDiv.addEventListener('click', () => {
        container.textContent = ""
        fearE()

    })
    container.appendChild(fearDiv)

}