import { craftsmanshipTimeline, artisanLedger, ecoMetrics } from '../data/content.js'

export function initCraftsmanshipTimeline() {
  const container = document.getElementById('timeline-interactive-container')
  if (!container) return

  let activeIndex = 0

  function render() {
    const current = craftsmanshipTimeline[activeIndex]

    container.innerHTML = `
      <div class="rounded-3xl border border-[#2C3B4D]/15 bg-white p-6 md:p-10 shadow-botanical">
        <!-- Stepper Navigation Header -->
        <div class="flex items-center justify-between border-b border-[#2C3B4D]/10 pb-6 overflow-x-auto gap-2">
          ${craftsmanshipTimeline
            .map(
              (step, idx) => `
            <button
              type="button"
              data-step-index="${idx}"
              class="timeline-step-btn tap-target flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                idx === activeIndex
                  ? 'bg-[#1E2D24] text-[#F6F4EE] shadow-sm'
                  : 'bg-[#F6F4EE] text-[#526356] hover:bg-[#E4E7DF] hover:text-[#1E2D24]'
              }"
              aria-selected="${idx === activeIndex}"
            >
              <span class="h-2 w-2 rounded-full ${idx === activeIndex ? 'bg-[#8A5A12]' : 'bg-[#2C3B4D]/30'}"></span>
              <span>${step.phase}</span>
              <span class="hidden sm:inline text-[10px] opacity-75">(${step.days})</span>
            </button>
          `
            )
            .join('')}
        </div>

        <!-- Dynamic Step Content -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <!-- Step Photo -->
          <div class="md:col-span-6 relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2C3B4D]/10 bg-[#E4E7DF]">
            <img
              src="${current.imageUrl}"
              alt="${current.title}"
              class="h-full w-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1E2D24]/70 via-transparent to-transparent pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="rounded-full bg-[#8A5A12] px-3 py-1 text-xs font-semibold uppercase tracking-wider">${current.days}</span>
              <p class="mt-2 font-serif text-xl font-medium leading-tight">${current.action}</p>
            </div>
          </div>

          <!-- Step Description -->
          <div class="md:col-span-6 space-y-4">
            <div class="inline-flex items-center gap-2 rounded-full bg-[#E4E7DF] px-3.5 py-1.5 text-xs font-semibold text-[#1E2D24]">
              <span class="h-2 w-2 rounded-full bg-[#8A5A12]"></span>
              <span>${current.phase} • Waktu Pengerjaan: ${current.days}</span>
            </div>

            <h4 class="font-serif text-3xl font-medium text-[#1E2D24] leading-tight">
              ${current.title}
            </h4>

            <p class="text-sm text-[#526356] leading-relaxed">
              ${current.desc}
            </p>

            <div class="rounded-xl border border-[#8A5A12]/20 bg-[#F6F4EE] p-4 text-xs">
              <span class="font-semibold text-[#8A5A12] uppercase tracking-wider block mb-1">Standar Ketelitian DDaunan:</span>
              <p class="text-[#1E2D24] font-medium">${current.detail}</p>
            </div>

            <!-- Stepper Navigation Prev/Next -->
            <div class="flex items-center justify-between pt-2">
              <button
                type="button"
                id="timeline-prev-btn"
                class="tap-target inline-flex items-center gap-1 rounded-full border border-[#2C3B4D]/20 px-4 py-2 text-xs font-semibold text-[#1E2D24] hover:bg-[#E4E7DF] transition-colors disabled:opacity-40 disabled:pointer-events-none"
                ${activeIndex === 0 ? 'disabled' : ''}
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                <span>Fase Sebelumnya</span>
              </button>

              <span class="text-xs font-medium text-[#526356]">${activeIndex + 1} dari ${craftsmanshipTimeline.length}</span>

              <button
                type="button"
                id="timeline-next-btn"
                class="tap-target inline-flex items-center gap-1 rounded-full bg-[#1E2D24] px-4 py-2 text-xs font-semibold text-[#F6F4EE] hover:bg-[#8A5A12] transition-colors disabled:opacity-40 disabled:pointer-events-none"
                ${activeIndex === craftsmanshipTimeline.length - 1 ? 'disabled' : ''}
              >
                <span>Fase Berikutnya</span>
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `

    // Event listeners for step buttons
    container.querySelectorAll('.timeline-step-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-step-index') || '0', 10)
        if (idx !== activeIndex) {
          activeIndex = idx
          render()
        }
      })
    })

    // Prev / Next button listeners
    const prevBtn = document.getElementById('timeline-prev-btn')
    const nextBtn = document.getElementById('timeline-next-btn')

    prevBtn?.addEventListener('click', () => {
      if (activeIndex > 0) {
        activeIndex--
        render()
      }
    })

    nextBtn?.addEventListener('click', () => {
      if (activeIndex < craftsmanshipTimeline.length - 1) {
        activeIndex++
        render()
      }
    })
  }

  render()
}

export function renderArtisanLedger() {
  const container = document.getElementById('artisan-ledger-container')
  if (!container) return

  container.innerHTML = artisanLedger
    .map(
      (artisan) => `
    <article class="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2C3B4D]/15 bg-[#F6F4EE] p-6 shadow-sm hover:shadow-botanical transition-all duration-300">
      <div>
        <div class="relative aspect-square overflow-hidden rounded-2xl border border-[#2C3B4D]/10 bg-white">
          <img
            src="${artisan.imageUrl}"
            alt="${artisan.name}"
            class="h-full w-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          <div class="absolute bottom-3 left-3 right-3">
            <span class="rounded-full bg-[#1E2D24]/85 px-3 py-1 text-xs font-semibold text-[#F6F4EE] backdrop-blur-sm border border-white/20">
              ${artisan.experience}
            </span>
          </div>
        </div>

        <div class="mt-5 space-y-1">
          <div class="flex items-baseline justify-between">
            <h4 class="font-serif text-2xl font-medium text-[#1E2D24]">${artisan.name}</h4>
            <span class="text-xs text-[#526356] font-medium">${artisan.age}</span>
          </div>
          <p class="text-xs font-semibold text-[#8A5A12] uppercase tracking-wider">${artisan.specialty}</p>
        </div>

        <p class="mt-4 text-xs italic text-[#526356] leading-relaxed border-t border-[#2C3B4D]/10 pt-4">
          "${artisan.quote}"
        </p>
      </div>

      <div class="mt-6 border-t border-[#2C3B4D]/10 pt-4 flex items-center justify-between text-xs text-[#1E2D24]">
        <span class="font-medium">Kampung Seberang Mesjid</span>
        <span class="inline-flex items-center text-[#8A5A12] font-semibold">
          <svg class="mr-1 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Perajin Terverifikasi
        </span>
      </div>
    </article>
  `
    )
    .join('')
}

export function renderEcoMetrics() {
  const container = document.getElementById('eco-metrics-container')
  if (!container) return

  container.innerHTML = ecoMetrics
    .map(
      (m) => `
    <div class="rounded-2xl border border-[#2C3B4D]/15 bg-white p-6 shadow-sm">
      <span class="font-serif text-3xl sm:text-4xl font-bold text-[#1E2D24] block">${m.value}</span>
      <p class="text-xs font-semibold tracking-wider uppercase text-[#8A5A12] mt-1">${m.label}</p>
      <p class="text-xs text-[#526356] mt-2 leading-relaxed">${m.desc}</p>
    </div>
  `
    )
    .join('')
}
