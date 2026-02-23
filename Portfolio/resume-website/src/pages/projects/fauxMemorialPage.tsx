import { useState } from "react";

function FauxMemorial() {
    const [birthdate, setBirthdate] = useState<string>();
    const [deathdate, setDeathdate] = useState<string>();

    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dayRanges = { min: 1, maxA: 31, maxB: 30, maxFeb: 28, maxLeap: 29 };
    const birthYearRange = { min: 1960, max: 2015 };
    const deathYearRange = { min: 1972, max: 2025 };
    const leapYears = [1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012]

    const generateBirthdate = () => {
        const birthMonth = Math.floor(Math.random() * (11 - 0 + 1) + 0);
        const birthYear = Math.floor(Math.random() * (birthYearRange.max - birthYearRange.min + 1) + birthYearRange.min);
        const isLeapYear = leapYears.includes(birthYear);
        const birthDayGen = () => {
            let dayMax;
            switch (birthMonth) {
                case (1):
                    if (isLeapYear) {
                        dayMax = dayRanges.maxLeap
                    } else {
                        dayMax = dayRanges.maxFeb
                    }
                    break;
                case (3):
                case (5):
                case (8):
                case (10):
                    dayMax = dayRanges.maxB
                    break;
                default:
                    dayMax = dayRanges.maxA
                    break;
            }
            return (Math.floor(Math.random() * (dayMax - dayRanges.min + 1) + dayRanges.min));
        };
        setBirthdate(`${monthArray[birthMonth]} ${birthDayGen()}, ${birthYear}`);
        return;
    }

    return (
        <div>
            <h2>With the Angles Now</h2>
            <h3>Forever in our hearts</h3>
            <div>
                <img src="https://thispersondoesnotexist.com/" alt="Loading..." decoding="async" height={300} width={300} />
            </div>
        </div>
    )
};

export default FauxMemorial;
