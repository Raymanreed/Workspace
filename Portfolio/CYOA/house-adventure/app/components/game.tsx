import React, { useEffect, useState } from 'react';
import { ExploreHouse } from './story';
import { GameCompleted } from './completion';

const Game = () => {
    const [room, setRoom] = useState(0);
    const [inventory, setInventory] = useState(Array<string>)
    const [unlockedRooms, setUnlockedRooms] = useState(Array<number>)
    const [gameState, setGameState] = useState('')

    const baseUnlockedRooms = [1,2,3,4,5,6,7,8,9]

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
        switch (action.actionId) {
            case 'acquireMasterBathKey':
                if (!inventory.includes("masterBathroomKey")) {
                    inventory.push("masterBathroomKey")
                }
                alert("You picked up the key to the master bathroom.")
                break;

            case 'acquireBasementKey':
                if (!inventory.includes("basementKey")) {
                    inventory.push("basementKey")
                }
                alert("You picked up the key to the basement.")
                break;

            case 'unlockMasterBathroom':
                if (inventory.includes("masterBathroomKey")) {
                    unlockedRooms.push(10) 
                    alert("You unlocked the master bathroom");
                }
                break;

            case 'unlockBasement':
                if (inventory.includes("basementKey")) {
                    unlockedRooms.push(11)
                    alert("You unlocked the basement");
                }
                break;

            case 'goTowardsLight':
                setGameState("complete")
                break;

            default:
                break;
        }
    }
    
    const restartHouse = () => {
        setGameState('')
        setInventory([])
        setUnlockedRooms(baseUnlockedRooms)
        setRoom(0)
    }

    useEffect(() => setUnlockedRooms(baseUnlockedRooms), [])

    console.log(inventory)

    return (
        <div className="items-center game-container">
            { gameState === 'complete' ?
                <GameCompleted />
            :
                <ExploreHouse onChoice={handleChoice} onAction={handleAction} roomId={room} />
            }
            <div className='restart-button flex mt-20'>
                <button onClick={restartHouse} className='mx-auto place-self-center p-2 rounded bg-sky-600'>
                    Restart
                </button>
            </div>
        </div>
    )
}

export const HouseAdventure = Game;
