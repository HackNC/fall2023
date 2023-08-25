window.addEventListener('load', () => {
    const aTags = document.querySelectorAll('.hamburger-menu *')

    aTags.forEach(el => {
        el.onclick = () => {
            const hamBtn = document.getElementById('hamburger-btn')
            hamBtn.checked = false
        }
    })
})