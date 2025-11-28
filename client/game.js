// Game Setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: 400,
    y: 300,
    size: 20,
    speed: 3,
    color: "#00ff00"
};

const keys = {};

// Input
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document. addEventListener("keyup", (e) => {
    keys[e.key] = false;
})

// Update

function update() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;

    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}

// Drawing

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Main Loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop()