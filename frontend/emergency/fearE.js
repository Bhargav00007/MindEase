export function fearEm() {
    const fearDiv = document.createElement('div');
    const fearImg = document.createElement('div');
    const forwardBtn = document.createElement('button');
    const backwardBtn = document.createElement('button');

    fearImg.className = 'playerImgs'
    fearImg.id = 'fearImg'
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

    const audioL = 'fearE.mp3'
    const audioF = document.createElement('div')
    // const audioF = document.createElement('audio');
    audioF.innerHTML = `<audio id = "myAudio" controls ><source src="${audioL
        }" type="audio/mp3" /> Your browser does not support the audio element. </audio > `

    function skip(seconds) {
        const audio = document.getElementById("myAudio");

        audio.currentTime += seconds;
    }

    fearDiv.appendChild(fearImg)
    fearDiv.appendChild(audioF)
    fearDiv.appendChild(backwardBtn)
    fearDiv.appendChild(forwardBtn)

    container.appendChild(fearDiv)
}