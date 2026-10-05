import './style.css'
import { initSmoothScroll } from './components/scroll.js'
import { initNavbar } from './components/navbar.js'
import { initVisualizer } from './components/visualizer.js'
import { renderBentoCatalog } from './components/bento.js'
import { initWorkshop } from './components/workshop.js'
import { initCraftsmanshipTimeline, renderArtisanLedger, renderEcoMetrics } from './components/timeline.js'

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lenis smooth scroll
  try {
    initSmoothScroll()
  } catch (err) {
    console.warn('Smooth scroll init fallback:', err)
  }

  // Initialize Sticky Navbar & Mobile Drawer
  initNavbar()

  // Initialize Interactive Botanical Pigment Visualizer
  initVisualizer()

  // Render Dynamic Bento Catalog
  renderBentoCatalog()

  // Initialize Workshop Session Selector & WhatsApp Generator
  initWorkshop()

  // Initialize Premium Enhanced Features
  initCraftsmanshipTimeline()
  renderArtisanLedger()
  renderEcoMetrics()
})
