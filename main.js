// DOM Document Object Model

//abre e fecha o menu qundo clicar no icon hambuguer e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item no menu. esconder o menu X

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scroll

const header = document.querySelector('header')

const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})

// ======= swiper ========

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollRevial : mostrar elementos quando der scroll na pagina

const scrollRevial = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollRevial.reveal(
  `#home .image, #home .text,
  #about .image,  #about .text,
  #services .header,  #services .text,
  #testimonials header,  #testimonials .testimonials,
  #contact .text,  #contact .links,
  footer .brand, footer .social

  
  `,
  { interval: 100 }
)

// botton volta para o topo

const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
