let nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.clientHeight)
        nav.classList.add('sticky')
    else
        nav.classList.remove('sticky')
})