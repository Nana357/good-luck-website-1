document.getElementById('surpriseButton').addEventListener('click', function() {
    var surpriseMessage = document.getElementById('surpriseMessage');
    if (surpriseMessage.classList.contains('hidden')) {
        surpriseMessage.classList.remove('hidden');
        surpriseMessage.style.display = 'block';
    } else {
        surpriseMessage.classList.add('hidden');
        surpriseMessage.style.display = 'none';
    }
});
