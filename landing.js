/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
  
  if (themeToggle.checked) {
    document.documentElement.style.setProperty('--color-background', 'var(--color-background-dark)');
    document.documentElement.style.setProperty('--color-text', 'var(--color-text-dark)');
    document.documentElement.style.setProperty('--color-border', 'var(--color-border-dark)');
    document.documentElement.style.setProperty('--color-hover', 'var(--color-hover-dark)');
  } else {
    document.documentElement.style.setProperty('--color-background', 'var(--color-background-light)');
    document.documentElement.style.setProperty('--color-text', 'var(--color-text-light)');
    document.documentElement.style.setProperty('--color-border', 'var(--color-border-light)');
    document.documentElement.style.setProperty('--color-hover', 'var(--color-hover-light)');
  }
});

// Optional: Check user's preference from previous sessions (localStorage)
if (localStorage.getItem('theme') === 'dark') {
  themeToggle.checked = true;
  document.documentElement.style.setProperty('--color-background', 'var(--color-background-dark)');
  document.documentElement.style.setProperty('--color-text', 'var(--color-text-dark)');
  document.documentElement.style.setProperty('--color-border', 'var(--color-border-dark)');
  document.documentElement.style.setProperty('--color-hover', 'var(--color-hover-dark)');
}

// Save user's preference to localStorage
themeToggle.addEventListener('change', () => {
  const theme = themeToggle.checked ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

//hover
const listItems = document.querySelectorAll('.individualProject');

listItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Add the 'hovered' class when the mouse is over the item
    item.classList.add('hover');

  });

  item.addEventListener('mouseout', () => {
    // Remove the 'hovered' class when the mouse leaves the item
    item.classList.remove('hover');
  });
});

dynamicText = document.getElementById('dynamicText');

document.addEventListener('DOMContentLoaded', function () {
    const roles = ['Software Developer.', 'Data Scientist.', 'Problem Solver.', 'Web Developer.', 'AI Enthusiast.'];
    let index = 0;
    let letterIndex = 0;

    function updateDynamicText() {
        const dynamicTextElement = document.getElementById('dynamicText');
        const role = roles[index];

        if (letterIndex < role.length) {
            dynamicTextElement.textContent = `${role.substring(0, letterIndex + 1)}`;
            letterIndex++;
        } else {
            // Move to the next role
            index = (index + 1) % roles.length;
            letterIndex = 0;
        }
    }

    // Update text every 200 milliseconds (adjust the timing as needed)
    setInterval(updateDynamicText, 200);
});