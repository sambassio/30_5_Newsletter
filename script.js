document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycby1vHY_XpApKh5koTs-t0Ib2IFqj_3y3kPFh9jIQDw1Uqks1EqRH2bHJYpZoeGhjQWb/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        alert('Thank you for subscribing!');
        document.getElementById('signupForm').reset();
    })
    .catch(error => console.error('Error:', error));
});
