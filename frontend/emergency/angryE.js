export function angryEm() {
    const angryDiv = document.createElement('div');
    const angryImg = document.createElement('div');
    const forwardBtn = document.createElement('button');
    const backwardBtn = document.createElement('button');

    angryImg.className = 'playerImgs'
    angryImg.id = 'angryImg'
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

    const audioL = 'angryE.mp3'
    const audioF = document.createElement('div')
    // const audioF = document.createElement('audio');
    audioF.innerHTML = `<audio id = "myAudio" controls ><source src="${audioL
        }" type="audio/mp3" /> Your browser does not support the audio element. </audio > `

    function skip(seconds) {
        const audio = document.getElementById("myAudio");

        audio.currentTime += seconds;
    }

    angryDiv.appendChild(angryImg)
    angryDiv.appendChild(audioF)
    angryDiv.appendChild(backwardBtn)
    angryDiv.appendChild(forwardBtn)

    container.appendChild(angryDiv)
}