function cpfMask(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function handleCPFInput(event) {
    const input = event.target;
    input.value = cpfMask(input.value);
}

document.getElementById('login-cpf').addEventListener('input', handleCPFInput);
document.getElementById('register-cpf').addEventListener('input', handleCPFInput);

// toggle forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

 document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

 document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login realizado com sucesso!');
});

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
});
