type Rooms = {
    entryway: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ]
    },
    livingRoom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ]
    },
    diningRoom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ]
    },
    kitchen: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ],
        actions: [
            { 
                actionName: string,
                actionId: string,
                actionDescription: string
            }
        ]
    },
    basement: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number }
        ],
        actions: [
            { 
                actionName: string,
                actionId: string,
                actionDescription: string
            }
        ]
    },
    stairwell: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ]
    },
    downstairsBathroom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number }
        ],
        actions: [
            { 
                actionName: string,
                actionId: string,
                actionDescription: string
            }
        ]
    },
    upstairs: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ]
    },
    kidsBedroom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number }
        ]
    },
    masterBedroom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number },
            { roomName: string, nextRoom: number }
        ],
        actions: [
            { 
                actionName: string,
                actionId: string,
                actionDescription: string
            }
        ]
    },
    masterBathroom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number }
        ],
        actions: [
            { 
                actionName: string,
                actionId: string,
                actionDescription: string
            }
        ]
    },
    upstairsBathroom: {
        id: number,
        description: string,
        connections: [
            { roomName: string, nextRoom: number }
        ]
    },
}

export const rooms: Rooms = {
    entryway: {
        id: 0,
        description: "You are in the entryway to the house",
        connections: [
            { roomName: "Living Room", nextRoom: 1 },
            { roomName: "Dining Room", nextRoom: 2 }
        ]
    },
    livingRoom: {
        id: 1,
        description: "You are in the living room of the house",
        connections: [
            { roomName: "Entryway", nextRoom: 0 },
            { roomName: "Stairwell", nextRoom: 4 },
            { roomName: "Bathroom", nextRoom: 5 },
            { roomName: "Dining Room", nextRoom: 2 }
        ]
    },
    diningRoom: {
        id: 2,
        description: "You are in the dining room of the house",
        connections: [
            { roomName: "Entryway", nextRoom: 0 },
            { roomName: "Living Room", nextRoom: 1 },
            { roomName: "Kitchen", nextRoom: 3 }
        ]
    },
    kitchen: {
        id: 3,
        description: "You are in the kitchen of the house. Not much here.",
        connections: [
            { roomName: "Dining Room", nextRoom: 2 },
            { roomName: "Basement", nextRoom: 11 }
        ],
        actions: [
            {
                actionName: "Unlock Basement",
                actionId: "unlockBasement",
                actionDescription: "You unlock the Basement"
            }
        ]
    },
    basement: {
        id: 11,
        description: "You are in the basement. It's dark and cool. You see a light at the far end.",
        connections: [
            { roomName: "Go back upstairs", nextRoom: 3 }
        ],
        actions: [
            {
                actionName: "Go towards the light",
                actionId: "goTowardsLight",
                actionDescription: "You step towards the light and are blinded"
            }
        ]
    },
    stairwell: {
        id: 4,
        description: "You are climbing the stairs of the house.",
        connections: [
            { roomName: "Upstairs", nextRoom: 6 },
            { roomName: "Living Room", nextRoom: 1 }
        ]
    },
    downstairsBathroom: {
        id: 5,
        description: "You are in the downstairs bathroom. Not much here.",
        connections: [
            { roomName: "Living Room", nextRoom: 1 }
        ],
        actions: [
            {
                actionName: "Take master bath key",
                actionId: "acquireMasterBathKey",
                actionDescription: "You pick up the key to the master bathroom."
            }
        ]
    },
    upstairs: {
        id: 6,
        description: "You are in the upstairs of the house. Lots of rooms",
        connections: [
            { roomName: "Kids Bedroom", nextRoom: 7 },
            { roomName: "Master Bedroom", nextRoom: 8 },
            { roomName: "Bathroom", nextRoom: 9 },
            { roomName: "Go back downstairs", nextRoom: 1 }
        ]
    },
    kidsBedroom: {
        id: 7,
        description: "You are in the kids bedroom. Toys everywhere, so messy.",
        connections: [
            { roomName: "Exit", nextRoom: 6 }
        ]
    },
    masterBedroom: {
        id: 8,
        description: "You are in the master bedroom. So spacious!",
        connections: [
            { roomName: "Master Bathroom", nextRoom: 10 },
            { roomName: "Exit", nextRoom: 6 }
        ],
        actions: [
            {
                actionName: "Unlock Master Bathroom",
                actionId: "unlockMasterBathroom",
                actionDescription: "You unlock the master bathroom with the key."
            }
        ]
    },
    masterBathroom: {
        id: 10,
        description: "You are in the master bathroom. Look at that claw tub!",
        connections: [
            { roomName: "Exit", nextRoom: 8 }
        ],
        actions: [
            {
                actionName: "Investigate the tub",
                actionId: "acquireBasementKey",
                actionDescription: "You look in the tub and find the key to the basement."
            }
        ]
    },
    upstairsBathroom: {
        id: 9,
        description: "You are in the upstairs bathroom. Light a match!",
        connections: [
            { roomName: "Exit", nextRoom: 6 }
        ]
    },
};
