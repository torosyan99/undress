let swiper;
let isDesktop = window.innerWidth >= 768;

function initSwiper() {
  if (swiper) swiper.destroy(true, true);

  swiper = new Swiper('.payments__swiper', {
    spaceBetween: 16,
    loop: true,
    slidesPerView: 1.57,

    breakpoints: {
      768: {
        slidesPerView: 2.6,
        direction: 'vertical',
        centeredSlides: true,
      },
      510: {
        slidesPerView: 2.2,
      },
      410: {
        slidesPerView: 1.8,
      }
    }
  });
}

initSwiper();

window.addEventListener('resize', () => {
  const nowDesktop = window.innerWidth >= 768;

  if (nowDesktop !== isDesktop) {
    isDesktop = nowDesktop;
    initSwiper();
  }
});


let activeFaq = document.querySelector('.faq__item--active');

if (activeFaq) {
  document.addEventListener('click', (e) => {
    const faqItem = e.target.closest('.faq__item-top');

    if (faqItem) {
      const parent = faqItem.parentElement;
      if (activeFaq)
        activeFaq.classList.remove('faq__item--active');

      if (parent === activeFaq) {
        activeFaq = null
        return
      }

      parent.classList.add('faq__item--active');
      activeFaq = parent;

    }
  })
}