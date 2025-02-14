// Function to Open Gift Box
function openGift() {
    let lid = document.querySelector('.lid');
    let giftBox = document.querySelector('.gift-box');
    let photoFrame = document.getElementById('photoFrame');

    // Open the Lid
    lid.style.transform = 'rotateX(-90deg)';

    // Hide the Gift Box
    setTimeout(() => {
        giftBox.style.opacity = '0';
    }, 500);

    // Show 3D Rotating Frame
    setTimeout(() => {
        photoFrame.style.opacity = '1';
        startRotation();
    }, 700);
}

// Function for Auto Rotation
function startRotation() {
    let frame = document.querySelector(".photo-frame");
    let angle = 0;

    setInterval(() => {
        angle += 1;
        frame.style.transform = `rotateY(${angle}deg)`;
    }, 50);
}
