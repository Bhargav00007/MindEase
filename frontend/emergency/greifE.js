export function griefEm() {
    const griefDiv = document.createElement('div');
    const griefImg = document.createElement('div');
    const forwardBtn = document.createElement('button');
    const backwardBtn = document.createElement('button');

    griefImg.className = 'playerImgs'
    griefImg.id = 'griefImg'
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

    const audioL = 'griefE.mp3'
    const audioF = document.createElement('div')
    // const audioF = document.createElement('audio');
    audioF.innerHTML = `<audio id = "myAudio" controls ><source src="${audioL
        }" type="audio/mp3" /> Your browser does not support the audio element. </audio > `

    function skip(seconds) {
        const audio = document.getElementById("myAudio");

        audio.currentTime += seconds;
    }

    griefDiv.appendChild(griefImg)
    griefDiv.appendChild(audioF)
    griefDiv.appendChild(backwardBtn)
    griefDiv.appendChild(forwardBtn)

    container.appendChild(griefDiv)
}