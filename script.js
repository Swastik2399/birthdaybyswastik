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
            }, 200);
        }, 500);
    }, 300);
});
