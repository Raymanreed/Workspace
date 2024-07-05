import React, { useState } from 'react';
import { ExploreHouse } from './story';

const Game = () => {
    const [room, setRoom] = useState(0);
    const handleChoice = (choice: any) => {
        if (choice.nextRoom !== undefined) {
            setRoom(choice.nextRoom)
        } else {
            alert("That Room doesn't exist")
        }
    }
    
    const restartHouse = () => {
        setRoom(0)
    }


    console.log("top level room: ", room)
    return (
        <div className="game-container">
            <ExploreHouse onChoice={handleChoice} roomId={room} />
            <button onClick={restartHouse}>
                Restart
            </button>
        </div>
    )
}

export const HouseAdventure = Game;
