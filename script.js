const sliderImages =  document.querySelectorAll('.slider__img');
const sliderLine  = document.querySelector('.slider__line');
const sliderDotsWrap = document.querySelector('.slider__dots');
const sliderDots =  document.querySelectorAll('.slider__dot');
const prevBtn =  document.querySelector('.btn--prev');
const nextBtn=  document.querySelector('.btn--next');


let sliderCount  = 0;
let sliderWidth;
window.addEventListener('resize', showSlide);
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);
sliderDotsWrap.addEventListener('click', handleActiveDot);


function handleActiveDot(e) {
  const isWrap = e.target.classList.contains('slider__dots')
  if (isWrap) return;
  const dotIndex = [...sliderDots].indexOf(e.target);
    sliderCount = dotIndex;
    rollSlide();
    getActiveSlide(sliderCount);
}

function showSlide() {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length +'px';
  sliderImages.forEach(img => img.style.width = sliderWidth +'px');
  rollSlide()
}

showSlide();

function showNextSlide() {
  sliderCount+=1;
  if(sliderCount >= sliderImages.length) sliderCount = 0;
  rollSlide();
  getActiveSlide(sliderCount);
}
function showPrevSlide() {
  sliderCount-=1;
  if(sliderCount <0) {
    sliderCount = sliderImages.length - 1;
  };
  rollSlide();
  getActiveSlide(sliderCount);
}

function rollSlide() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

function getActiveSlide(index) {
sliderDots.forEach(dot => dot.classList.remove('active'));
sliderDots[index].classList.add('active')
}