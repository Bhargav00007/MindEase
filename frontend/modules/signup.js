import { signinPage } from "./signin.js"


export function signupPage() {
    const signupDiv = document.createElement('div')
    signupDiv.className = 'signupDiv'

    const textDiv = document.createElement('div')
    textDiv.textContent = 'Sign up'
    textDiv.className = "textDiv"
    signupDiv.appendChild(textDiv)

    const usernameUpInputEle = document.createElement('input')

    usernameUpInputEle.placeholder = 'Username'
    usernameUpInputEle.id = 'usernameUpInput'

    const passwordUpInputEle = document.createElement('input')
    passwordUpInputEle.type = 'password'
    passwordUpInputEle.placeholder = 'Password'
    passwordUpInputEle.id = 'passwordUpInput'

    const signupBtnEle = document.createElement('button')
    signupBtnEle.id = 'signupBtn'
    signupBtnEle.textContent = 'signup'

    container.appendChild(signupDiv)
    signupDiv.appendChild(usernameUpInputEle)
    signupDiv.appendChild(passwordUpInputEle)
    signupDiv.appendChild(signupBtnEle)



    const usernameUpInput = document.getElementById('usernameUpInput');
    const passwordUpInput = document.getElementById('passwordUpInput');
    const signupBtn = document.getElementById('signupBtn');
    // const printBtn = document.getElementById('print');

    const handleAdd = () => {
        const usernameUp = usernameUpInput.value;
        const passwordUp = passwordUpInput.value;
        if (usernameUp.length >= 1 && passwordUp.length >= 1) {
            fetch("http://localhost:5555/user/signup/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: usernameUp,
                    password: passwordUp
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Response Data:", data);
                    alert("User Created");
                    console.log(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
        container.innerText = ""
        signinPage()
    }
    signupBtn.addEventListener('click', handleAdd);



}

