import React from 'react';
import { rooms } from '../lib/rooms';

interface RoomNavProps {
    onChoice: any;
    onAction: any;
    roomId: number;
}

const RoomNav = ({onChoice, onAction, roomId}: RoomNavProps) => {
    console.log("passed room: ", roomId)
    const currentRoom = Object.values(rooms).find(r => r.id === roomId) as any;

    return (
        <div className="container flex mx-auto story-container justify-center">
            <div className="story-display min-w-96">
                <p className="room-description text-black bg-white flex-wrap text-center p-5 mb-10 border-2 border-amber-500 rounded-md">
                    {currentRoom?.description}
                </p>
                <ul className="room-group-choices flex justify-center mx-auto space-x-1">
                    {currentRoom?.connections.map((choice: any, index: any) => (
                        <li key={index} className="room-choices-item bg-indigo-800 rounded">
                            <button className="btn choice-btn text-center p-3" onClick={() => onChoice(choice)}>
                                {choice.roomName}
                            </button>
                        </li>
                    ))}
                </ul>
                { currentRoom?.actions !== undefined ? 
                    <ul className="action-group-choices flex justify-center mx-auto space-x-1">
                        {currentRoom?.actions.map((action: any) => (
                            <li key="action" className='btn choice-btn text-center p-3'>
                                <button className="btn choice-btn text-center p-3 bg-green-900 rounded"  onClick={() => onAction(action)}>
                                    {action?.actionName}
                                </button>
                            </li>
                        ))}
                    </ul>
                    :
                    null
                }
            </div>
        </div>
    );
}

export const ExploreHouse = RoomNav;
