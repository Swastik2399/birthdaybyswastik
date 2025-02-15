document.getElementById("giftBox").addEventListener("click", function () {
    let lid = document.querySelector('.lid');
    let giftBox = document.getElementById("giftBox");
    let photoFrame = document.getElementById("photoFrame");

    // Open the Lid with Animation
    lid.style.transform = 'rotateX(-90deg)';

    // Hide the Gift Box after animation
    setTimeout(() => {
        giftBox.style.opacity = "0";
        setTimeout(() => {
            giftBox.style.display = "none"; // Fully hide box
            photoFrame.style.display = "block";
            setTimeout(() => {
                photoFrame.style.opacity = "1";
                startRotation();
            }, 200); // Smooth fade-in effect
        }, 500);
    }, 300);

    // Redirect to index2.html after 10 seconds
    setTimeout(() => {
        window.location.href = "index2.html";
    }, 10000);
});

// Function for Auto Rotating Photo Frame
function startRotation() {
    let frame = document.getElementById("photoFrame");
    let angle = 0;

    setInterval(() => {
        angle += 1;
        frame.style.transform = `rotateY(${angle}deg)`;
    }, 50);
}
