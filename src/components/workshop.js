export function initWorkshop() {
  const sessionSelect = document.getElementById('workshop-session')
  const countSelect = document.getElementById('workshop-count')
  const bookButton = document.getElementById('workshop-book-btn')

  function updateLink() {
    if (!bookButton) return
    const session = sessionSelect?.value || 'Sabtu Pagi (09.30 WITA)'
    const count = countSelect?.value || '1 Orang'
    const message = `Halo Studio DDaunan, saya ingin mendaftar Lokakarya Pewarna Alam Sasirangan untuk sesi ${session} sejumlah ${count}. Mohon info ketersediaan slotnya.`
    bookButton.setAttribute('href', `https://wa.me/6281255501928?text=${encodeURIComponent(message)}`)
  }

  sessionSelect?.addEventListener('change', updateLink)
  countSelect?.addEventListener('change', updateLink)

  updateLink()
}
