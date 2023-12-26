 //animacion en canvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    

    const particles = [];

    class Particle {
      constructor(x, y, charge) {
        this.x = x;
        this.y = y;
        this.charge = charge; // Puedes ajustar la carga (+1 o -1) para simular interacciones.
        this.radius = 10; // Reduzco el tamaño de las partículas
        this.color = this.charge === 1 ? 'black' : 'white';
        this.velocityX = (Math.random() - 0.5) * 5; 
        this.velocityY = (Math.random() - 0.5) * 5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 50);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.draw();
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velocityX = -this.velocityX;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.velocityY = -this.velocityY;
        }
      }
    }

    function init() {
      for (let i = 0; i < 10; i++) { // Aumento el número de partículas para una animación más lenta
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const charge = Math.random() > 0.5 ? 1 : -1; 
        particles.push(new Particle(x, y, charge));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
      }
    }

    init();
    animate();