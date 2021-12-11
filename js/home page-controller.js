function onInit() {
    closeModal()
    renderPage()
}

function closeModal() {
    var elModal = document.querySelector('.home-modal')
    var elBtns = document.querySelector('.buttons')
    setTimeout(() => {
        elModal.style.visibility = 'hidden'

    }, 4000);
    setTimeout(() => {

        elBtns.style.visibility = 'visible'
    }, 5000);
}



function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

function renderPage() {
    var user = loadFromStorage('userDB')

    if (!user) return
    console.log('user:', user);
    var elAstrology = document.querySelector('.astro')
    elAstrology.innerHTML =
        `<div class="home-astrology">
    <h1>Daily astrological forecast</h2>
        <p>${astrologicalForecast[ getRandomIntInclusive(0, 2)]}</p>
</div>`

    var elHomeBody = document.querySelector('.home-body')
    elHomeBody.style.backgroundColor = user.backgroundColor
    elHomeBody.style.color = user.fontColor


}




function _saveColorToStorage() {
    saveToStorage('userDB', gBcgColor)
}