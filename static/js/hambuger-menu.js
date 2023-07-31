window.addEventListener('load', () => {
    const hamBtn = document.getElementById('hamburger-btn')
    const aTags = document.querySelectorAll('.hamburger-menu *')
    console.log(aTags)
    console.log(hamBtn)



    aTags.forEach(el => {
        el.onclick = () => {
            hamBtn.checked = false
        }
    })
})