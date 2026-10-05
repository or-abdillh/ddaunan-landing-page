import { botanicalPigments } from '../data/content.js'

export function initVisualizer() {
  const container = document.getElementById('visualizer-container')
  if (!container) return

  let currentPigment = botanicalPigments[0]

  function render() {
    container.innerHTML = `
      <div class="relative overflow-hidden rounded-3xl border border-[#2C3B4D]/15 bg-white p-6 md:p-8 shadow-botanical transition-all duration-300">
        <!-- Interactive Header & Swatches -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2C3B4D]/10 pb-6">
          <div>
            <span class="text-xs font-semibold tracking-[0.2em] uppercase text-[#8A5A12]">Pilihan Resep Botani</span>
            <h4 class="mt-1 font-serif text-2xl font-medium text-[#1E2D24]">Eksplorasi Warna Kalimantan</h4>
          </div>
          <!-- 4 Swatch Buttons -->
          <div class="flex items-center gap-2" role="tablist" aria-label="Pilihan Pigmen Dedaunan">
            ${botanicalPigments
              .map(
                (p) => `
              <button
                type="button"
                role="tab"
                aria-selected="${p.id === currentPigment.id}"
                aria-label="${p.name}"
                data-pigment-id="${p.id}"
                class="pigment-btn tap-target relative h-11 w-11 rounded-full p-1 transition-transform duration-200 hover:scale-105 ${
                  p.id === currentPigment.id
                    ? 'ring-2 ring-[#8A5A12] ring-offset-2 ring-offset-[#F6F4EE]'
                    : 'opacity-70 hover:opacity-100'
                }"
              >
                <span class="block h-full w-full rounded-full shadow-inner" style="background-color: ${p.colorHex};"></span>
              </button>
            `
              )
              .join('')}
          </div>
        </div>

        <!-- Dynamic Content Card -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <!-- Image Container with Aspect Ratio & Overlay -->
          <div class="md:col-span-6 relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2C3B4D]/10 bg-[#E4E7DF]">
            <img
              id="visualizer-image"
              src="${currentPigment.imageUrl}"
              alt="${currentPigment.name} - ${currentPigment.motif}"
              class="h-full w-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1E2D24]/70 via-transparent to-transparent pointer-events-none"></div>
            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <span class="text-xs font-semibold tracking-wider uppercase text-[#E4E7DF]">${currentPigment.latinName}</span>
                <p class="font-serif text-lg font-medium leading-tight">${currentPigment.motif}</p>
              </div>
              <span class="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm font-medium border border-white/30">${currentPigment.tag}</span>
            </div>
          </div>

          <!-- Recipe Details & Story -->
          <div class="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <div class="inline-flex items-center gap-2 rounded-full bg-[#E4E7DF] px-3 py-1 text-xs font-semibold text-[#1E2D24] mb-2">
                <span class="h-2 w-2 rounded-full" style="background-color: ${currentPigment.colorHex};"></span>
                <span>${currentPigment.colorName}</span>
              </div>
              <h5 class="font-serif text-2xl font-medium text-[#1E2D24]">${currentPigment.name}</h5>
              <p class="mt-2 text-sm text-[#526356] leading-relaxed">
                ${currentPigment.processDetail}
              </p>
            </div>

            <div class="rounded-xl border border-[#2C3B4D]/10 bg-[#F6F4EE] p-4 text-xs space-y-2">
              <div class="flex justify-between">
                <span class="text-[#526356] font-medium">Bahan Pengunci (Mordant):</span>
                <span class="font-semibold text-[#1E2D24]">${currentPigment.mordant}</span>
              </div>
              <div class="flex justify-between border-t border-[#2C3B4D]/10 pt-2">
                <span class="text-[#526356] font-medium">Filosofi Tradisi:</span>
                <span class="font-medium text-[#1E2D24] text-right max-w-[200px]">${currentPigment.motifMeaning}</span>
              </div>
            </div>

            <a
              href="https://wa.me/6281255501928?text=Halo%20DDaunan,%20saya%20tertarik%20dengan%20kain%20warna%20alami%20${encodeURIComponent(currentPigment.name)}"
              target="_blank"
              rel="noopener noreferrer"
              class="tap-target inline-flex items-center justify-center rounded-full bg-[#1E2D24] px-6 py-3 text-sm font-medium text-[#F6F4EE] transition-all hover:bg-[#8A5A12] active:scale-95 shadow-sm"
            >
              <span>Tanyakan Ketersediaan Kain Ini</span>
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    `

    // Attach click events
    container.querySelectorAll('.pigment-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-pigment-id')
        const found = botanicalPigments.find((p) => p.id === id)
        if (found && found.id !== currentPigment.id) {
          currentPigment = found
          render()
        }
      })
    })
  }

  render()
}
