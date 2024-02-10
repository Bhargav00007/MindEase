export function focusMed() {
    const focusDiv = document.createElement('div');
    const focusImg = document.createElement('div');
    const forwardBtn = document.createElement('button');
    const backwardBtn = document.createElement('button');

    focusImg.className = 'playerImgs'
    focusImg.id = 'focusImg'
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

    const audioL = 'focusM.mp3'
    const audioF = document.createElement('div')
    // const audioF = document.createElement('audio');
    audioF.innerHTML = `<audio id = "myAudio" controls ><source src="${audioL
        }" type="audio/mp3" /> Your browser does not support the audio element. </audio > `

    function skip(seconds) {
        const audio = document.getElementById("myAudio");

        audio.currentTime += seconds;
    }

    focusDiv.appendChild(focusImg)
    focusDiv.appendChild(audioF)
    focusDiv.appendChild(backwardBtn)
    focusDiv.appendChild(forwardBtn)

    container.appendChild(focusDiv)
}