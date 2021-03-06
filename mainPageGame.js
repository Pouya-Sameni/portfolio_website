var canvas = document.getElementById("initialGame");
var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

var mario_x = 0;
var mario_y = 218;
var block_x = 70;
var block_y = 100;
var x = 0;
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var draw_mario1 = true;
var draw_mario1_flip = true;
var draw_mario2 = false;
var draw_mario2_flip = false;
var mario_jump = new Audio('sound_files/mario_jump.mp3');
var veryFirstTime = true;
////////////////Images - OPEN
var linkedin = new Image();
linkedin.src = "Images/Linkedin.png";
var github = new Image();
github.src = "Images/github.png";
var resume = new Image();
resume.src = "Images/resume_logo.png";
var mario1 = new Image();
mario1.src = "Images/mario1.png";
var mario2 = new Image();
mario2.src = "Images/mario2.png";
var mario1_flip = new Image();
mario1_flip.src = "Images/mario1_flip.png";
var mario2_flip = new Image();
mario2_flip.src = "Images/mario2_flip.png";
var mario_back = new Image();
mario_back.src = "Images/mario_back.png";
var play_button = new Image();
play_button.src = "Images/play_button.png";
//////////////////////////////
play_button.onload = function () {
    ctx.drawImage(play_button, 213, 128, 70, 70);
    play_button.setAttribute('style', 'transform:rotate(200deg)');
}
//Load Images


function load_images_firstTime() {
    github.onload = function () {
        ctx.drawImage(github, block_x, block_y, 50, 50);
    }
    linkedin.onload = function () {
        ctx.drawImage(linkedin, block_x + 100, block_y, 50, 50);
    }
    resume.onload = function () {
        ctx.drawImage(resume, block_x + 200, block_y, 40, 55);
    }
    mario1.onload = function () {
        ctx.drawImage(mario1, mario_x, mario_y, 40, 55);
    }
    mario2.onload = function () {
        ctx.drawImage(mario2, mario_x, mario_y, 40, 55);
    }
    mario1_flip.onload = function () {
        ctx.drawImage(mario1_flip, mario_x, mario_y, 40, 55);
    }
    mario2_flip.onload = function () {
        ctx.drawImage(mario2_flip, mario_x, mario_y, 40, 55);
    }
    mario_back.onload = function () {
        ctx.drawImage(mario_back, mario_x, mario_y, 40, 55);
    }
}

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function draw_start() {
    ctx.beginPath();
    ctx.rect(0, 0, 480, 320);
    ctx.fillStyle = "#ffd3ad";
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.arc(240, 160, 90, 0, Math.PI * 2, false);
    ctx.fillStyle = "#0fa2f7";
    ctx.fill();
    ctx.closePath();


}


function keyDownHandler(e) {
    if (e.code == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.code == 'ArrowLeft') {
        leftPressed = true;
    }
    else if (e.code == 'Space') {
        if (mario_y >= 218) {
            mario_jump.play();
            mario_y = mario_y - 90;

            add_mario();
        }

        if (mario_x >= block_x - 5 && mario_x <= block_x + 55) {
            window.open('https://github.com/Pouya-Sameni', '_blank');
        }
        else if (mario_x >= block_x + 145 && mario_x <= block_x + 205) {

            window.open('https://www.linkedin.com/in/pouya-sameni-36250115b/', '_blank');
        }
        else if (mario_x >= block_x + 295 && mario_x <= block_x + 355) {
            window.open('Files/Pouya_Sameni_Resume.pdf', '_blank');
        }

    }
}
function keyUpHandler(e) {
    if (e.code == 'ArrowRight') {
        rightPressed = false;
    }
    else if (e.code == 'ArrowLeft') {
        leftPressed = false;
    }
    else if (e.code == 'Space'&& e.getElementById == document.getElementById) {
        e.preventDefault();
        spacePressed = false;
    }
}

function redraw_All() {

    ctx.drawImage(mario_back, 0, 0, 480, 320);
    ctx.drawImage(github, block_x, block_y, 50, 50);
    ctx.drawImage(linkedin, block_x + 150, block_y, 50, 50);
    ctx.drawImage(resume, block_x + 300, block_y, 50, 50);

}



function add_mario() {



    if (draw_mario1) {

        ctx.drawImage(mario1, mario_x, mario_y, 40, 55);
    }
    else if (draw_mario1_flip) {
        ctx.drawImage(mario1_flip, mario_x, mario_y, 40, 55);
    }
    else if (draw_mario2) {
        ctx.drawImage(mario2, mario_x, mario_y, 40, 55);
    }
    else if (draw_mario2_flip) {
        ctx.drawImage(mario2_flip, mario_x, mario_y, 40, 55);
    }


    if (rightPressed) {
        draw_mario1_flip = false;
        draw_mario2_flip = false;
        if (x <= 20) {
            x++;
        }
        else {
            x = 0;
            draw_mario1 = !draw_mario1;
            draw_mario2 = !draw_mario2;

            if (draw_mario1) {
                draw_mario2 = false;
            }
            else {
                draw_mario2 = true;
            }

        }
    }
    else if (leftPressed) {
        draw_mario1 = false;
        draw_mario2 = false;
        if (x <= 20) {
            x++;
        }
        else {
            console.log(x);
            x = 0;
            draw_mario1_flip = !draw_mario1_flip;
            draw_mario2_flip = !draw_mario2_flip;

            if (draw_mario1_flip) {
                draw_mario2_flip = false;
            }
            else {
                draw_mario2_flip = true;
            }



        }
    }
    else {
        if (draw_mario2_flip) {
            draw_mario2_flip = false;
            draw_mario1_flip = true;
        }
        else if (draw_mario2) {
            draw_mario2 = false;
            draw_mario1 = true;
        }

        if (!draw_mario1_flip && !draw_mario2_flip &&
            !draw_mario1 && !draw_mario2) {
            draw_mario1 = true;
        }


    }

}

function draw() {

    if (veryFirstTime) {
        load_images_firstTime();
        veryFirstTime = false;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redraw_All();
    add_mario();

    if (rightPressed && mario_x < canvas.width - 40) {
        mario_x += 3;

        if (mario_y < 218) {
            mario_y += 4;
        }
    }
    else if (leftPressed && mario_x > 0) {
        mario_x -= 3;
        if (mario_y < 218) {
            mario_y += 4;
        }
    }
    else if (!spacePressed && mario_y < 218) {
        mario_y += 4;
    }

    requestAnimationFrame(draw);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function animate_play() {
    let start = Date.now(); // remember start time
   
    let tempx = 213;
    let tempy = 128;
    let tempW = 70;
    


    let timer = setInterval(function () {
        // how much time passed from the start?
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // finish the animation after 2 seconds
            draw();
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(240, 160, 90, 0, Math.PI * 2, false);
        ctx.fillStyle = "#0fa2f7";
        ctx.fill();
        ctx.closePath();
        ctx.drawImage(play_button, tempx = tempx-2, tempy = tempy - 2, tempW = tempW +2 , tempW = tempW + 2);
       


    }, 1);
}


//draw();
draw_start();



document.getElementById("initialGame").onmousedown = function (evt) {
    if (veryFirstTime){
        animate_play();
    }
    

}


