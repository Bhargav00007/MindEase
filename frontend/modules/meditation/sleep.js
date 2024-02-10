export function sleepMed() {
    const sleepDiv = document.createElement('div');
    const sleepImg = document.createElement('div');
    const forwardBtn = document.createElement('button');
    const backwardBtn = document.createElement('button');

    sleepImg.className = 'playerImgs'
    sleepImg.id = 'sleepImg'
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

    const audioL = 'sleepM.mp3'
    const audioF = document.createElement('div')
    // const audioF = document.createElement('audio');
    audioF.innerHTML = `<audio id = "myAudio" controls ><source src="${audioL
        }" type="audio/mp3" /> Your browser does not support the audio element. </audio > `

    function skip(seconds) {
        const audio = document.getElementById("myAudio");

        audio.currentTime += seconds;
    }

    sleepDiv.appendChild(sleepImg)
    sleepDiv.appendChild(audioF)
    sleepDiv.appendChild(backwardBtn)
    sleepDiv.appendChild(forwardBtn)

    container.appendChild(sleepDiv)
}

{/* <audio
			id="myAudio"
			controls>
			<source
				src="song.mp3"
				type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio> */}

// 		<button onclick="skip(-10)">Backward 10 seconds</button>
// 		<button onclick="skip(10)">Forward 10 seconds</button>

// 		<script>
// const audio = document.getElementById("myAudio");

// function skip(seconds) {
// 	audio.currentTime += seconds;
// }
// 		</script>