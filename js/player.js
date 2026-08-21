let playerX = 140;
let playerY = 140;

function move(dx,dy){

    playerX += dx * 40;
    playerY += dy * 40;

    if(playerX < 0) playerX = 0;
    if(playerY < 0) playerY = 0;

    if(playerX > 280) playerX = 280;
    if(playerY > 280) playerY = 280;

    renderPlayer();
}

function renderPlayer(){

    const player =
        document.getElementById("player");

    player.style.left =
        playerX + "px";

    player.style.top =
        playerY + "px";
}

function near(x,y){

    const dx = playerX - x;
    const dy = playerY - y;

    return Math.sqrt(
        dx*dx + dy*dy
    ) < 60;
}
