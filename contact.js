document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data form
    const name = event.target.from_name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const user = "Armand Nur";

    // Kirim data menggunakan EmailJS
    emailjs.send('service_vqfoan3', 'template_y2jxvjb', {
            from_name: name,
            from_email: email,
            to_name: user,
            message: message
        })
        .then(function (response) {
            const alert = document.getElementById('status')
            const text = document.getElementById('text-alert')
            text.innerHTML = "Message sent successfully!";
            alert.classList.add("non-hide");
            alert.classList.add("alert-success");
            alert.classList.remove("hide");
            const countdownElement = document.getElementById("countdown");
            let count = 5;
            const intervalId = setInterval(() => {
                countdownElement.innerHTML = (count - 1) + "s";
                count--;
                
                if (count <= 0) {
                    clearInterval(intervalId);
                    countdownElement.innerHTML = 5 + "s";

                }
            }, 1000);
            setTimeout(() => {
                alert.classList.remove("non-hide");
                alert.classList.add("hide");
            }, 5000);
        }, function (error) {
            const alert = document.getElementById('status')
            const text = document.getElementById('text-alert')
            text.innerHTML = "Failed to send message!";
            alert.classList.add("non-hide");
            alert.classList.add("alert-danger");
            alert.classList.remove("hide");
            const countdownElement = document.getElementById("countdown");
            let count = 5;
            const intervalId = setInterval(() => {
                countdownElement.innerHTML = (count - 1) + "s";
                count--;
                
                if (count < 0) {
                    clearInterval(intervalId);
                    countdownElement.innerHTML = 5 + "s";

                }
            }, 1000);
            setTimeout(() => {
                alert.classList.remove("non-hide");
                alert.classList.add("hide");
            }, 5000);
            console.log(error);

        });


});