export function initNavbar() {
  const header = document.getElementById('main-header')
  const mobileToggle = document.getElementById('mobile-menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')

  // Scroll detection for sticky blur navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('glass-nav', 'shadow-sm')
      header?.classList.remove('bg-transparent')
    } else {
      header?.classList.remove('glass-nav', 'shadow-sm')
      header?.classList.add('bg-transparent')
    }
  })

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true'
      mobileToggle.setAttribute('aria-expanded', !isExpanded)
      mobileMenu.classList.toggle('hidden')
    })

    // Close mobile menu on anchor click
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
        mobileToggle.setAttribute('aria-expanded', 'false')
      })
    })
  }
}
