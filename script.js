document.getElementById("giftBox").addEventListener("click", function () {
    let lid = document.querySelector('.lid');
    let giftBox = document.getElementById("giftBox");
    let frameContainer = document.getElementById("frameContainer");

    // Open the Lid with Animation
    lid.style.transform = 'rotateX(-90deg)';

    // Hide the Gift Box after animation
    setTimeout(() => {
        giftBox.style.opacity = "0";
        setTimeout(() => {
            giftBox.style.display = "none"; // Fully hide box
            frameContainer.style.display = "flex";
            setTimeout(() => {
                frameContainer.style.opacity = "1";
                startRotation();
            }, 200);
        }, 500);
    }, 300);

    // Confetti Effect
    setTimeout(createConfetti, 500);

    // Redirect to index2.html after 10 seconds
    setTimeout(() => {
        startFireworks();
        setTimeout(() => {
            window.location.href = "index2.html";
        }, 2000);
    }, 10000);
});

// Function for Auto Rotating Frames
function startRotation() {
    let frames = document.querySelectorAll(".photo-frame");
    frames.forEach((frame, index) => {
        let angle = 0;
        setInterval(() => {
            angle += (index + 1);
            frame.style.transform = `rotateY(${angle}deg)`;
        }, 50);
    });
}

// Function to Create Confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        setTimeout(() => confetti.remove(), 5000);
    }
}

// Function to Create Fireworks
function startFireworks() {
    setInterval(() => {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);

        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 50}vh`;

        setTimeout(() => firework.remove(), 2000);
    }, 300);
}
