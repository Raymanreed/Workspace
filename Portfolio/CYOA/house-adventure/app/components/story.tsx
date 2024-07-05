import React from 'react';
import { rooms } from '../lib/rooms';

interface RoomNavProps {
    onChoice: any;
    roomId: number;
}

const RoomNav = ({onChoice, roomId}: RoomNavProps) => {
    console.log("passed room: ", roomId)
    const currentRoom = Object.values(rooms).find(r => r.id === roomId);

    const handleChoice = (choice: any) => {
        const nextRoom = choice.nextRoom;
        onChoice(choice);
    }

    return (
        <div className="story-container">
            <div className="story-display">
                <p className="room-description">{currentRoom?.description}</p>
                <ul className="room-group-choices">
                    {currentRoom?.connections.map((choice, index) => (
                        <li key={index} className="room-choices-item">
                            <button className="btn choice-btn" onClick={() => handleChoice(choice)}>
                                {choice.roomName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const ExploreHouse = RoomNav;
