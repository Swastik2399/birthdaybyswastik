let lastX = 0, lastY = 0, lastZ = 0;
let threshold = 12; 
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
    let candle = document.querySelector(".candle");
    let flame = document.querySelector(".flame");

    cake.style.animation = "cut 0.5s forwards";
    
    // Remove candle and flame
    setTimeout(() => {
        candle.style.display = "none";
        flame.style.display = "none";
    }, 500);

    setTimeout(() => {
        document.getElementById("message").classList.remove("hidden");
        document.getElementById("proceedBtn").classList.remove("hidden");
    }, 1000);
}

function nextPage() {
    window.location.href = "index3.html"; 
}
