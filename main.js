onload = () =>{
    document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {
    const messageOverlay = document.getElementById('messageOverlay');
    const cancelButton = document.getElementById('cancelButton');

    // Show the message after 10 seconds
    setTimeout(() => {
        messageOverlay.style.display = 'flex';
    }, 6000);

    // Hide the message and return to the flower page when cancel button is clicked
    cancelButton.addEventListener('click', () => {
        messageOverlay.style.display = 'none';
    });
});
