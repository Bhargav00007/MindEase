export function signinPage() {
    const signinDiv = document.createElement('div')
    signinDiv.id = 'signinDiv'

    const usernameInputEle = document.createElement('input')
    usernameInputEle.id = 'usernameInput'

    const passwordInputEle = document.createElement('input')
    passwordInputEle.id = 'passwordInput'

    const signinBtnEle = document.createElement('button')
    signinBtnEle.id = 'signinBtn'
    signinBtnEle.textContent = 'signin'

    container.appendChild(signinDiv)
    signinDiv.appendChild(usernameInputEle)
    signinDiv.appendChild(passwordInputEle)
    signinDiv.appendChild(signinBtnEle)



    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const signinBtn = document.getElementById('signinBtn');
    // const printBtn = document.getElementById('print');

    const handleAdd = () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (username.length >= 1 && password.length >= 1) {
            fetch("http://localhost:5555/user/signin/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    localStorage.setItem('userData', JSON.stringify(data));
                    console.log(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    }
    signinBtn.addEventListener('click', handleAdd);



}

