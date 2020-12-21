function validate(event) {
    event.preventDefault();

    var userEmail = event.target[0].value
    var userPssw = event.target[1].value

    var rememberLogIn = event.target[2].checked

    if (userEmail) {
        document.getElementById('fillEmailError').style.visibility = 'hidden'
        document.getElementById('inEmail').classList.remove("errorInput")
    } else {
        return emailError()
    }

    if (userPssw) {
        document.getElementById('fillPsswError').style.visibility = 'hidden'
        document.getElementById('inPssw').classList.remove("errorInput")
    } else {
        return psswError()
    }

    if (userEmail === 'joao@gmail.com' && userPssw != '12345') {
        document.getElementById('logInError').style.visibility = 'visible'
        document.getElementById('inPssw').classList.add("errorInput")
        document.getElementById('fillPsswError').style.visibility = 'visible'
        return document.getElementById('inEmail').classList.remove("errorInput")

    }

    if (userEmail === 'joao@gmail.com' && userPssw === '12345') {
        if (rememberLogIn) {
            localStorage.setItem('token', userEmail)
        } else {
            localStorage.removeItem('token')
        }
        localStorage.setItem('user', userEmail)
        window.location.href = 'dashboard.html'
    } else {
        emailError()
        return psswError()
    }
}

function getUser() {
    var user = localStorage.getItem('user')
    return document.getElementById('setUser').textContent = 'Bem Vindo(a) ' + user
}

function emailError() {
    document.getElementById('logInError').style.visibility = 'visible'
    document.getElementById('inEmail').classList.add("errorInput")
    document.getElementById('fillEmailError').style.visibility = 'visible'
}

function psswError() {
    document.getElementById('logInError').style.visibility = 'visible'
    document.getElementById('inPssw').classList.add("errorInput")
    document.getElementById('fillPsswError').style.visibility = 'visible'
}