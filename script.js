const canvas = document.getElementById('canvas1');

const ctx1 = canvas.getContext('2d');
canvas.width = window.innerWidth;

// console.log(canvas.width, canvas.height);
var mouse = {
    x : undefined,
    y: undefined
}

window.addEventListener('click' ,function (e) {
    console.log(e);
})
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    draw() {
        ctx1.beginPath();
        ctx1.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
        ctx1.strokeStyle = 'white';
        ctx1.stroke();
        ctx1.fill();
    }

    update() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if(this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }
}

var particlesArray = [];

for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle);
}

function animate() {
    ctx1.clearRect(0,0,canvas.width, canvas.height);
    requestAnimationFrame(animate);

    for (let index = 0; index < particlesArray.length; index++) {
        // const element = array[index];
        // console.log(particlesArray[index]);
        particlesArray[index].update();
        particlesArray[index].draw();


    }
}

animate();