import { offeringsCatalog } from '../data/content.js'

export function renderBentoCatalog() {
  const container = document.getElementById('bento-grid-container')
  if (!container) return

  container.innerHTML = offeringsCatalog
    .map(
      (item) => `
    <article class="${item.gridClass} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2C3B4D]/15 bg-white p-6 md:p-8 shadow-botanical transition-all duration-300 hover:shadow-botanical-hover hover:-translate-y-1">
      <!-- Media Aspect Ratio Container -->
      <div class="relative overflow-hidden rounded-2xl bg-[#E4E7DF] ${
        item.gridClass.includes('row-span-2') ? 'h-64 sm:h-72 md:h-80' : 'h-48 sm:h-52'
      }">
        <img
          src="${item.imageUrl}"
          alt="${item.title}"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1E2D24]/60 via-transparent to-transparent pointer-events-none"></div>
        <div class="absolute top-3 left-3">
          <span class="rounded-full bg-[#1E2D24]/85 px-3 py-1 text-xs font-semibold text-[#F6F4EE] backdrop-blur-sm border border-white/20">
            ${item.badge}
          </span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-xs font-semibold tracking-wider uppercase text-[#E4E7DF]">${item.tier}</span>
          <p class="text-lg font-serif font-medium leading-tight">${item.material}</p>
        </div>
      </div>

      <!-- Content Section -->
      <div class="mt-6 flex flex-1 flex-col justify-between">
        <div>
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h4 class="font-serif text-2xl font-medium text-[#1E2D24] group-hover:text-[#8A5A12] transition-colors">
              ${item.title}
            </h4>
            <span class="font-sans font-semibold text-[#8A5A12] text-sm md:text-base whitespace-nowrap">
              ${item.price}
            </span>
          </div>
          <p class="mt-1 text-xs font-medium text-[#526356]">${item.subtitle}</p>
          <p class="mt-3 text-sm text-[#526356] leading-relaxed">
            ${item.description}
          </p>

          <ul class="mt-4 space-y-1.5 border-t border-[#2C3B4D]/10 pt-4">
            ${item.features
              .map(
                (f) => `
              <li class="flex items-center text-xs text-[#1E2D24]">
                <svg class="mr-2 h-3.5 w-3.5 text-[#8A5A12] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${f}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>

        <div class="mt-6 pt-4 border-t border-[#2C3B4D]/10">
          <a
            href="https://wa.me/6281255501928?text=Halo%20DDaunan,%20saya%20ingin%20memesan%20${encodeURIComponent(item.title)}"
            target="_blank"
            rel="noopener noreferrer"
            class="tap-target w-full rounded-full border border-[#2C3B4D]/25 bg-transparent px-5 py-2.5 text-center text-xs font-semibold text-[#1E2D24] transition-all duration-200 hover:border-[#1E2D24] hover:bg-[#1E2D24] hover:text-[#F6F4EE] active:scale-95"
          >
            Pesan Produk Ini via WhatsApp
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join('')
}
