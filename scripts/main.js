const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Submission successful! We\'ll be in touch soon.');
                form.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            alert('Submission successful! We\'ll be in touch soon.');
            form.reset();
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';
        });
    });