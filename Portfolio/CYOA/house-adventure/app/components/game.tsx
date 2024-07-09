import React, { useState } from 'react';
import { ExploreHouse } from './story';

const Game = () => {
    const [room, setRoom] = useState(0);
    const [gameState, setGameState] = useState('')

    const unlockedRooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleChoice = (choice: any) => {
        if (!unlockedRooms.includes(choice.nextRoom)) {
            alert("That Room is Locked")
            return
        }
        if (choice.nextRoom !== undefined) {
            setRoom(choice.nextRoom)
        } else {
            alert("That Room doesn't exist")
            return
        }
    }

    const handleAction = (action: any) => {
        if (action.actionId === "unlockMasterBathroom") {
            unlockedRooms.push(10)
            alert("You unlocked the master bathroom")
            return
        }
        if (action.actionId === "unlockBasement") {
            unlockedRooms.push(11)
            alert("you unlockd the basement")
            return
        }
    }
    
    const restartHouse = () => {
        setGameState('')
        setRoom(0)
    }


    console.log("top level room: ", room)
    return (
        <div className="items-center game-container">
            <ExploreHouse onChoice={handleChoice} onAction={handleAction} roomId={room} />
            <button onClick={restartHouse} className='mx-auto place-self-center'>
                Restart
            </button>
        </div>
    )
}

export const HouseAdventure = Game;
