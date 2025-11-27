
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skill-bar');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0
  };

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = parseInt(bar.getAttribute('data-skill-percent') || '0', 10);
        const fill = bar.querySelector('.skill-fill');
        const percentLabel = bar.previousElementSibling?.querySelector('.skill-percent');

        fill.style.width = percent + '%';

        if (percentLabel) {
          let current = 0;
          const duration = 900;
          const stepTime = Math.max(10, Math.floor(duration / Math.max(percent, 1)));
          const step = () => {
            current++;
            percentLabel.textContent = current + '%';
            if (current < percent) {
              setTimeout(step, stepTime);
            }
          };
          step();
        }

        observer.unobserve(bar);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, observerOptions);

  bars.forEach(bar => {
    observer.observe(bar);
  });
});


const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.getElementById('backToTop');
  if (!topBtn) {
    console.warn('Back-to-top button (#backToTop) not found in the DOM.');
    return;
  }

  
  const showAfter = 200;

  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > showAfter) {
          topBtn.classList.add('visible');
        } else {
          topBtn.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

 
  topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  let index = 0;

const slides = document.querySelector(".slides");
const totalImages = document.querySelectorAll(".slides img").length;

document.getElementById("nextBtn").onclick = () => {
  index++;
  if (index >= totalImages) index = 0;
  updateSlider();
};

document.getElementById("prevBtn").onclick = () => {
  index--;
  if (index < 0) index = totalImages - 1;
  updateSlider();
};

function updateSlider() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

  if (window.scrollY > showAfter) topBtn.classList.add('visible');
});



const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");

    if (link) {
      window.location.href = link; 
    }
  });
});

