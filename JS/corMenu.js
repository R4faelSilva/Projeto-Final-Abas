const navPills = document.getElementById('navPills');

if (navPills) {

    navPills.addEventListener('shown.bs.tab', function (event) {

        const targetId = event.target.getAttribute('href');

        if (targetId === '#abertura') {
            navPills.classList.add('estiloAbertura');

        }

        else {
            navPills.classList.remove('estiloAbertura')
        }
    });

    const activeLink = navPills.querySelector('.nav-link.active');

    if (activeLink && activeLink.getAttribute('href') === '#abertura') {
        navPills.classList.add('estiloAbertura')
    }
}