// Función de inicio de sesión simulada
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Simula un inicio de sesión exitoso
    alert('Inicio de sesión exitoso');
    
    // Redirige al Dashboard del Investigador
    window.location.href = "dashboard.html";
    return false;  // Prevenir el envío del formulario real
}

// Función de registro simulada
function register() {
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!newEmail || !newPassword || !confirmPassword) {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    // Simula un registro exitoso
    alert('Registro exitoso');
    
    // Redirige al Dashboard del Investigador
    window.location.href = "dashboard.html";
    return false;  // Prevenir el envío del formulario real
}
