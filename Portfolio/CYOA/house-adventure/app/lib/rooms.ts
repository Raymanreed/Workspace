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
            { roomName: string, nextRoom: number }
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
            { roomName: string, nextRoom: number }
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
            { roomName: "Dining Room", nextRoom: 2 }
        ]
    },
    stairwell: {
        id: 4,
        description: "You are climbing the stairs of the house.",
        connections: [
            { roomName: "Living Room", nextRoom: 1 },
            { roomName: "Upstairs", nextRoom: 6 }
        ]
    },
    downstairsBathroom: {
        id: 5,
        description: "You are in the downstairs bathroom. Not much here.",
        connections: [
            { roomName: "Living Room", nextRoom: 1 }
        ]
    },
    upstairs: {
        id: 6,
        description: "You are in the upstairs of the house. Lots of rooms",
        connections: [
            { roomName: "Go back downstairs", nextRoom: 1 },
            { roomName: "Kids Bedroom", nextRoom: 7 },
            { roomName: "Master Bedroom", nextRoom: 8 },
            { roomName: "Bathroom", nextRoom: 9 }
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
            { roomName: "Exit", nextRoom: 6 }
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
