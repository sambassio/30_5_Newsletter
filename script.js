
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    // Display the thank you message immediately after submission
    alert('Thank you for subscribing!');

    fetch('https://script.google.com/macros/s/AKfycby1vHY_XpApKh5koTs-t0Ib2IFqj_3y3kPFh9jIQDw1Uqks1EqRH2bHJYpZoeGhjQWb/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        // The request has been processed, but no further action is needed here
    })
    .catch(error => console.error('Error:', error));

    // Reset the form after submission
    document.getElementById('signupForm').reset();
});
