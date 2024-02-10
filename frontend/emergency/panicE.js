export function panicEm() {
    const panicDiv = document.createElement('div');
    const panicImg = document.createElement('div');
    const forwardBtn = document.createElement('button');
    const backwardBtn = document.createElement('button');

    panicImg.className = 'playerImgs'
    panicImg.id = 'panicImg'
    forwardBtn.className = 'forwardBtn'
    backwardBtn.className = 'backwardBtn'

    forwardBtn.textContent = '>>'
    backwardBtn.textContent = '<<'


    forwardBtn.addEventListener('click', () => {
        skip(10)
    })
    backwardBtn.addEventListener('click', () => {
        skip(-10)
    })

    const audioL = 'panicE.mp3'
    const audioF = document.createElement('div')
    // const audioF = document.createElement('audio');
    audioF.innerHTML = `<audio id = "myAudio" controls ><source src="${audioL
        }" type="audio/mp3" /> Your browser does not support the audio element. </audio > `

    function skip(seconds) {
        const audio = document.getElementById("myAudio");

        audio.currentTime += seconds;
    }

    panicDiv.appendChild(panicImg)
    panicDiv.appendChild(audioF)
    panicDiv.appendChild(backwardBtn)
    panicDiv.appendChild(forwardBtn)

    container.appendChild(panicDiv)
}