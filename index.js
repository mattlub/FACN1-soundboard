const images = Array.from(document.querySelectorAll('img'));

images.forEach(img => {
  img.addEventListener('click', e => {
    const person = this.dataset.person;
    console.log(person);
  })
})

function playSound(e) {
  // TODO: implement this
  const audio = document.querySelector('');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}
