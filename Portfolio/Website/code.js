const chooserNumber = (max, min) => {
    return Math.trunc(Math.random() * (max - min) + min);
};

const generateName = () => {
    const nameField = document.getElementById("Name")
    fetch('./assets/words/messages.json')
        .then(response => response.json())
        .then(data => {
            nameField.innerHTML += data.firstNames[chooserNumber(data.firstNames.length, 0)].concat(" ", data.lastNames[chooserNumber(data.lastNames.length, 0)])
        })
        .catch(error => console.log(error));
}

const generateLifetime = () => {
    const birthYear = chooserNumber(2010, 1960);
    const generateMonthDay = () => {
        const month = chooserNumber(12, 1)
        let day
        if (birthYear%4 == 0 && month == 2) {
            day = chooserNumber(29, 1)
        }
        if (month === 2) {
            day =chooserNumber(28, 1)
        }
        if (month === (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
            day = chooserNumber(31, 1)
        } else {
            day = chooserNumber(30, 1)
        }
        return [month, day].join('/')
    }

    const deathYear = Math.trunc(Math.random() * (2024 - birthYear) + birthYear);

    const birthDate = [generateMonthDay(), birthYear].join('/');
    const deathDate = [generateMonthDay(), deathYear].join('/');
    const dateField = document.getElementById("Lifetime")
    dateField.innerHTML += [birthDate, deathDate].join(' - ');
}
