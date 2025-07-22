(() => {
  // ปรับปีใน footer อัตโนมัติ
  document.getElementById('year').textContent = new Date().getFullYear();
})();
/* === Counter animation === */
const counters = document.querySelectorAll('.counter');
const runCounter = (entry) => {
  if (!entry.isIntersecting) return;
  entry.target.dataset.started = 'true';
  const goal = +entry.target.dataset.count;
  let current = 0;
  const step = Math.ceil(goal / 100);

  const tick = () => {
    current += step;
    if (current >= goal) {
      entry.target.textContent = goal.toLocaleString();
      return;
    }
    entry.target.textContent = current.toLocaleString();
    requestAnimationFrame(tick);
  };
  tick();
};

const io = new IntersectionObserver(
  (entries) => entries.forEach(runCounter),
  { threshold: 0.6 }
);
counters.forEach((c) => io.observe(c));
/* === Testimonials Swiper === */
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: { delay: 4500, disableOnInteraction: false },
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
