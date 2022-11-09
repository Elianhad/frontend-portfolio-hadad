
const habilidades = {
  titulo: "Habilidades",
  descripcion: [
    {
      titulo: "HTML - CSS",
      dominio: "90%",
      src: './public/HTML-CSS.png'
    },
    {
      titulo: "Javascript",
      dominio: "70%",
      src: './public/javascript.png'
    },
    {
      titulo: "Typescript",
      dominio: "50%",
      src: './public/typescript.png' 
    },
    {
      titulo: "React",
      dominio: "80%",
      src: './public/react.png'
    },
    {
      titulo: "Tailwindcss",
      dominio: "90%",
      src: './public/tailwindcss.png'
    },
    {
      titulo: "Golang",
      dominio: "60%",
      src: './public/go.png'
    }
  ]
}
document.addEventListener('DOMContentLoaded', () => {
  menuHamburguesaToggle()
})

function formatearFecha (fecha : Date) {
  const nuevaFecha = fecha.toLocaleDateString('es-Es', {month:'numeric', year: 'numeric'})
  return nuevaFecha
}
function menuHamburguesaToggle(){
  const menu : any = document.getElementById('menu')
  const nav : any = document.getElementById('nav')
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
