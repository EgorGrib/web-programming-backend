function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    console.log(email, pass);

    fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            formFields: [
                {
                    id: 'email',
                    value: email,
                },
                { id: 'password', value: pass },
            ],
        }),
    })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
}

function logout() {
    fetch('http://localhost:3000/auth/signout', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
    })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
}