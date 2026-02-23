import { useState } from "react";

function FauxMemorial() {
    const [birthdate, setBirthdate] = useState<string>();
    const [deathdate, setDeathdate] = useState<string>();

    

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
