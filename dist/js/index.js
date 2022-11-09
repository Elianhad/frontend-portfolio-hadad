var sobreMi = {
    titulo: "Sobre mi",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a mollis risus. Fusce ut erat ullamcorper, tincidunt metus in, mattis nibh. Nulla vel mollis odio. Pellentesque nec enim in odio fringilla vulputate eget tincidunt enim. Pellentesque sagittis posuere arcu ac pharetra. Etiam vel ipsum ac felis commodo consectetur. Mauris dapibus est eu suscipit ultrices. Suspendisse potenti. Sed a rutrum diam. Vivamus eget arcu mauris. Aliquam mollis metus nec euismod convallis. Integer a malesuada mi. Pellentesque iaculis lobortis mattis. "
};
var experiencia = {
    titulo: "Experiencia",
    descripcion: []
};
var habilidades = {
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
};
document.addEventListener('DOMContentLoaded', function () {
    menuHamburguesaToggle();
});
function formatearFecha(fecha) {
    var nuevaFecha = fecha.toLocaleDateString('es-Es', { month: 'numeric', year: 'numeric' });
    return nuevaFecha;
}
function menuHamburguesaToggle() {
    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav');
    menu.addEventListener('click', function () {
        if (menu.classList.contains('menu-transition')) {
            menu.classList.remove('menu-transition');
            nav.classList.add('d-none');
        }
        else {
            nav.classList.remove('d-none');
            menu.classList.add('menu-transition');
        }
    });
}
