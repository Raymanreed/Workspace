const getImage = () => {
    const picture = document.getElementById("Image")
    const imageBaseSrc = "./assets/picture/testImage"
    const testNumber = Math.trunc(Math.random() * (5 - 1) + 1);
    const extension = ".jpg"
    picture.src = imageBaseSrc.concat(testNumber, extension);
};

const generateName = () => {
    const firstNames = [
        "James",
        "Michael",
        "John",
        "Jamie",
        "Christopher",
        "Johnathon",
        "Joseph",
        "Daniel"
    ]
    const lastNames = [
        "Johnson",
        "Carmichael",
        "Larson",
        "Allen",
        "Hall",
        "James",
        "Fisher",
        "Frank"
    ]

    const chooserNumber = () => {
       return Math.trunc(Math.random() * (8 - 1) + 1);
    };

    const fullName = firstNames[chooserNumber()].concat(" ", lastNames[chooserNumber()])
    const nameField = document.getElementById("Name")
    nameField.innerHTML += fullName
}

const generateLifetime = () => {
    const birthYear = Math.trunc(Math.random() * (2024 - 1940) + 1940);
    const generateMonthDay = () => {
        const month = Math.trunc(Math.random() * (12 - 1) + 1);
        let day
        if (birthYear%4 == 0 && month == 2) {
            day = Math.trunc(Math.random() * (29 - 1) + 1);
        }
        if (month === 2) {
            day = Math.trunc(Math.random() * (28 - 1) + 1);
        }
        if (month === (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
            day = Math.trunc(Math.random() * (31 - 1) + 1);
        } else {
            day = Math.trunc(Math.random() * (30 - 1) + 1);
        }
        return [month, day].join('/')
    }

    const deathYear = Math.trunc(Math.random() * (2024 - birthYear) + birthYear);

    const birthDate = [generateMonthDay(), birthYear].join('/');
    const deathDate = [generateMonthDay(), deathYear].join('/');
    const dateField = document.getElementById("Lifetime")
    dateField.innerHTML += [birthDate, deathDate].join(' - ');
}
