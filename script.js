
// Using FormSubmit.co for easy email integration without API keys.
// The email will be sent to: shurbhirawat43@gmail.com

const form = document.getElementById('inquiryForm');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        const responseMsg = document.getElementById('responseMsg');

        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        fetch("https://formsubmit.co/ajax/shurbhirawat43@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (responseMsg) {
                    responseMsg.innerText = "Inquiry sent successfully!";
                    responseMsg.style.color = "green";
                } else {
                    alert("Inquiry sent successfully!");
                }
                form.reset();
            })
            .catch(error => {
                console.error(error);
                if (responseMsg) {
                    responseMsg.innerText = "Failed to send inquiry. Please try again.";
                    responseMsg.style.color = "red";
                } else {
                    alert("Failed to send inquiry. Please try again.");
                }
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}