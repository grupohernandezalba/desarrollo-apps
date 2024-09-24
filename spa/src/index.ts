const togglePassword: HTMLElement | null = document.getElementById('togglePassword')!;
const passwordInput: HTMLElement | null = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', ():void => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
    });
} else {
    console.error('Elementos no encontrados en el DOM');
}