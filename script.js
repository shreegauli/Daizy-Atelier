

  // Hamburger menu functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });
// shop now btn link
document.querySelector('.btn-shop').addEventListener('click', () => {
    window.location.href = "#";
});

// Add particle explosion to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', explodeParticles);
});

// explodeParticles event
document.addEventListener('DOMContentLoaded', () => {
    const sceneContainer = document.getElementById('sceneContainer');
    sceneContainer.addEventListener('click', () => {
      skipDialogue();
    });
  });

  function explodeParticles(event) {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 30; i++) {
      createParticle(x, y);
    }
  }

// crating  Particles

  function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.backgroundColor = getRandomColor();
    particle.style.borderRadius = '50%';
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 5 + Math.random() * 5;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    let opacity = 1;
    const animate = () => {
      particle.style.left = parseFloat(particle.style.left) + vx + 'px';
      particle.style.top = parseFloat(particle.style.top) + vy + 'px';
      opacity -= 0.02;
      particle.style.opacity = opacity;

      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        document.body.removeChild(particle);
      }
    };

// explodeParticles 

    requestAnimationFrame(animate);
    }const backgrounds = {
        cityStreet: {
        road: "#555555",
        buildings: "#888888",
        sky: "#87CEEB",
        sidewalk: "#CCCCCC"
        },
        beach: {
        sand: "#F4A460",
        sea: "#4169E1",
        sky: "#87CEEB",
        palmTree: "#228B22"
        },
        forest: {
        ground: "#8B4513",
        trees: "#228B22",
        sky: "#87CEEB",
        leaves: "#32CD32"
        },
        spaceStation: {
        walls: "#C0C0C0",
        windows: "#4169E1",
        floor: "#708090",
        controlPanel: "#2F4F4F"
        },
        desertCanyon: {
        sand: "#DEB887",
        rocks: "#8B4513",
        sky: "#87CEEB",
        cactus: "#2E8B57"
        },
        mansion: {
        walls: "#DEB887",
        floor: "#8B4513",
        furniture: "#A0522D",
        chandelier: "#FFD700"
        }
    };

  const props = {
    cityStreet: ['🚗', '🚶', '🚦'],
    beach: ['🏖️', '🌊', '🐚'],
    forest: ['🌳', '🍄', '🦌'],
    spaceStation: ['🚀', '👨‍🚀', '🛰️'],
    desertCanyon: ['🌵', '🦂', '☀️'],
    mansion: ['🏰', '💎', '🖼️']
  };

  function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }