let nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    console.log('scrolled')
    if(window.scrollY > nav.clientHeight)
        nav.classList.add('sticky')
    else
        nav.classList.remove('sticky')
})