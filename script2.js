let lastX = 0, lastY = 0, lastZ = 0;
let threshold = 12; // Lowered the threshold for better sensitivity
let isCakeCut = false;

window.addEventListener("devicemotion", function(event) {
    if (!event.accelerationIncludingGravity) {
        alert("Shake detection not supported on this device.");
        return;
    }

    let x = event.accelerationIncludingGravity.x;
    let y = event.accelerationIncludingGravity.y;
    let z = event.accelerationIncludingGravity.z;

    let deltaX = Math.abs(x - lastX);
    let deltaY = Math.abs(y - lastY);
    let deltaZ = Math.abs(z - lastZ);

    console.log(`Shake values - X: ${deltaX}, Y: ${deltaY}, Z: ${deltaZ}`);

    if ((deltaX > threshold || deltaY > threshold || deltaZ > threshold) && !isCakeCut) {
        cutCake();
        isCakeCut = true;
    }

    lastX = x;
    lastY = y;
    lastZ = z;
});

function cutCake() {
    let cake = document.getElementById("cake");
    cake.style.transform = "scale(0.9) rotate(10deg)";

    setTimeout(() => {
        cake.innerHTML = "🎂🎉"; // Replacing cake with an animated emoji
        document.getElementById("message").classList.remove("hidden");
        document.getElementById("proceedBtn").classList.remove("hidden");
    }, 1000);
}

function nextPage() {
    window.location.href = "index3.html"; // Now redirects to index3.html
}
