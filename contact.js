// contact.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_m1oc92d', 'template_0crogia', this)
            .then(function () {
                alert('Enquiry received!');
                form.reset();
            }, function (error) {
                console.error('FAILED...', error);
                alert('Something went wrong. Please try again later.');
            });
    });
});
