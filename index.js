let offset = 0;
const banners = document.querySelectorAll('.banner');
const exactPictureCounts = 5;
const exceed = -exactPictureCounts * 100;

function move() {
  offset = offset <= exceed ? 0 : offset - 0.8;
  banners.forEach((e) => {
    e.style.transform = `translate3d(${offset}%, 0, 0)`;
  });
  window.requestAnimationFrame(move);
}
requestAnimationFrame(move);