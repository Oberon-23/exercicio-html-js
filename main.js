const form = document.getElementById('numero-form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();  
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});