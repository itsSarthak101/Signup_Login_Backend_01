console.log("Hello and welcome to the Integration");
document.querySelector("#submit-btn").addEventListener('click', (e) => {
    e.preventDefault()

    const signup_email = document.querySelector('#email-inp').value 
    const signup_password = doucment.querySelector('#password-inp').value

    const user = {
        email: signup_email,
        password: signup_password
    }

    // Ajax and Api call
    const xhr = new XMLHttpRequest()
    const url = `http://localhost:5001/users/signup`
    
    xhr.open('POST', url)

    // Request header
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')        // CORS error handler
    xhr.setRequestHeader('Content-Tyoe', 'application/json')

    xhr.onreadystatechange = () => {
        if(xhr.status === 201 && xhr.readyState === 4) {
            console.log(xhr.responseText)
        }
    }

    xhr.send(JSON.stringify(user))
})