export function therapyhome() {
    const cbtTherapy = document.createElement('div')
    cbtTherapy.className = 'eleDivs'
    cbtTherapy.id = 'cbtTherapy'
    cbtTherapy.textContent = "Cognitive Behavioral Therapy "
    cbtTherapy.addEventListener('click', () => {
        container.textContent = ""
        container.innerHTML = `  <iframe width="800" height="400" src="https://www.youtube.com/embed/Jz55Uk9EH6U?si=vCOimuP4DYMXPCLb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    })
    container.appendChild(cbtTherapy)


    const exposureTherapy = document.createElement('div')
    exposureTherapy.className = 'eleDivs'
    exposureTherapy.id = 'exposureTherapy'
    exposureTherapy.textContent = "Exposure Therapy "
    exposureTherapy.addEventListener('click', () => {
        container.textContent = ""
        container.innerHTML = ` <iframe width="800" height="400" src="https://www.youtube.com/embed/763eNAeulM8?si=gy0UdDnNWus4i3t7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    })
    container.appendChild(exposureTherapy)



    const depressionTherapy = document.createElement('div')
    depressionTherapy.className = 'eleDivs'
    depressionTherapy.id = 'depressionTherapy'
    depressionTherapy.textContent = "Depression Therapy "
    depressionTherapy.addEventListener('click', () => {
        container.textContent = ""
        container.innerHTML = ` <iframe width="800" height="400" src="https://www.youtube.com/embed/lAdp3nT4BFA?si=A2ARgHAMwyxvIoqy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
    })
    container.appendChild(depressionTherapy)

    const nervousTherapy = document.createElement('div')
    nervousTherapy.className = 'eleDivs'
    nervousTherapy.id = 'nervousTherapy'
    nervousTherapy.textContent = "Trauma Therapy "
    nervousTherapy.addEventListener('click', () => {
        container.textContent = ""
        container.innerHTML = ` <iframe width="800" height="400" src="https://www.youtube.com/embed/dMmEdsuPRiU?si=zn4xyJgaPW5l927I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
    })
    container.appendChild(nervousTherapy)


}