function helloWorldFunc() {
    alert('Hello World! I am from a separate file!');
}

function clickOtherButton() {
    alert('Try clicking the other button');
}

function showHidden() {
    const reveal = document.getElementById('hidden-div').classList.add('surprise-div-revealed');
    document.getElementById('secretButton').addEventListener('click', hideShown);
    document.getElementById('secretButton').removeEventListener('click', showHidden);

    return reveal;
}

function hideShown() {
    const checkRevealed = document.getElementById('hidden-div').classList.contains('surprise-div-revealed');
    const hide = document.getElementById('hidden-div').classList.remove('surprise-div-revealed');
    document.getElementById('secretButton').addEventListener('click', showHidden);
    document.getElementById('secretButton').removeEventListener('click', hideShown);

    if (checkRevealed) {
        return hide;
    };
}
