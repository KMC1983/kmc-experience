// Mobile menu, smooth scroll, form handling, scroll reveal, explore button
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      event.preventDefault();
      if (navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (hamburger) hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }

      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  const tags = document.querySelectorAll('.tag[data-value]');
  const interestsInput = document.getElementById('interests');
  let selectedInterests = [];

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      const value = tag.getAttribute('data-value');
      if (!value) return;

      if (tag.classList.contains('selected')) {
        tag.classList.remove('selected');
        selectedInterests = selectedInterests.filter((item) => item !== value);
      } else {
        tag.classList.add('selected');
        selectedInterests.push(value);
      }

      if (interestsInput instanceof HTMLInputElement) {
        interestsInput.value = selectedInterests.join(',');
      }
    });
  });

  const communityForm = document.getElementById('communityForm');
  communityForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (selectedInterests.length === 0) {
      alert('Please select at least one interest!');
      return;
    }

    alert("Thanks for joining our community! We'll be in touch soon.");
    if (communityForm instanceof HTMLFormElement) {
      communityForm.reset();
    }
    selectedInterests = [];
    if (interestsInput instanceof HTMLInputElement) interestsInput.value = '';
    tags.forEach((tag) => tag.classList.remove('selected'));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const exploreBtn = document.getElementById('exploreBtn');
  exploreBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    exploreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entering the Experience';
    exploreBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff9e6b)';

    setTimeout(() => {
      exploreBtn.innerHTML = 'Explore Ecosystem <i class="fas fa-arrow-down"></i>';
      exploreBtn.style.background = 'linear-gradient(45deg, var(--secondary), var(--primary))';
      document.querySelector('#ecosystem')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  });
})();
