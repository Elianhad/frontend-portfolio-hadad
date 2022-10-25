document.addEventListener('DOMContentLoaded', () => {
  menuHamburguesaToggle()
})
function menuHamburguesaToggle() {
  const menu = document.getElementById('menu')
  const nav = document.getElementById('nav')
  menu.addEventListener('click', () => {
    if (menu.classList.contains('menu-transition')) {
      menu.classList.remove('menu-transition')
      nav.classList.add('d-none')
    } else {
      nav.classList.remove('d-none')
      menu.classList.add('menu-transition')
    }
  })
}
