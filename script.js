const button = document.querySelector('button');

button.addEventListener('click', () => {
    const usuario = document.querySelector('input[type="text"]').value;
    const contrasena = document.querySelector('input[type="password"]').value;
    console.log('Usuario:', usuario, 'Contraseña:', contrasena);
});