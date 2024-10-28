document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const existingUser = localStorage.getItem('user');

    if (existingUser) {
        alert('Ya te registraste. No puedes registrarte dos veces.');
    } else {
        const userData = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(userData));
        alert('Registro exitoso');
    }
});