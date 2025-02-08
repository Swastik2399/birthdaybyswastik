function proceed() {
    document.getElementById('popup').style.display = 'none';
    startConfetti();
}

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
const colors = ["#ff4081", "#6200ea", "#ffd700", "#00e676"];

for (let i = 0; i < 100; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 1
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, index) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speed;
        if (c.y > canvas.height) confetti[index].y = 0;
    });
}

function startConfetti() {
    setInterval(drawConfetti, 30);
                }
