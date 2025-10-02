const heartColors = ['#ffb6c1', '#f06292', '#ec407a', '#f8bbd0', '#ffebee'];
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${6 + Math.random() * 3}s`;
  heart.style.color = heartColors[Math.floor(Math.random()*heartColors.length)];
  heart.innerHTML = '<svg viewBox="0 0 32 32" width="32" height="32"><path fill="'+heart.style.color+'" d="M23.6 4.6c-2.2-2.2-5.8-2.2-8 0L16 6.2l-0.4-0.4c-2.2-2.2-5.8-2.2-8 0-2.2 2.2-2.2 5.8 0 8l8.4 8.4c0.8 0.8 2 0.8 2.8 0l8.4-8.4c2.2-2.2 2.2-5.8 0-8z"/></svg>';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 150);
