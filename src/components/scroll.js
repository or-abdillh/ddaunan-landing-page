import Lenis from 'lenis'

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Support internal anchor clicks with smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement, { offset: -80 })
        }
      }
    })
  })

  return lenis
}
