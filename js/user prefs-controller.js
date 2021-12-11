const gUser = {}


function onFormSend(ev) {
    ev.preventDefault();
    const bcgColor = document.querySelector('[name=bcgColor]').value;
    const fontColor = document.querySelector('[name=fontColor]').value;
    const birthDate = document.querySelector('[name=birthDate]').value;
    const birthTime = document.querySelector('[name=birthTime]').value;
    const email = document.querySelector('[name=email]').value;
    const age = document.querySelector('[name=age]').value;
    gUser.backgroundColor = bcgColor
    gUser.fontColor = fontColor
    gUser.birthDate = birthDate
    gUser.birthTime = birthTime
    gUser.email = email
    gUser.age = age
    console.log('Saving...', bcgColor, fontColor);
    saveToStorage('userDB', gUser)
}