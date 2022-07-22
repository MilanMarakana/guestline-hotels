import axios from "axios";

export interface Hotel {
    id: string;
    name: string;
    address1: string;
    starRating: string;
    images: [
        {
            url: string;
        }
    ];
}

export interface Room {
    rooms?: RoomsEntity[] | null;
}

export interface RoomsEntity {
    id: string;
    name: string;
    longDescription: string;
    occupancy: Occupancy;
}
export interface Occupancy {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
}


export type HotelList = Hotel;
export type RoomList = Room;

export const fetchHotel = async (): Promise<HotelList[]> => {
    const getHotel = await axios.get('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG');
    const hotel = getHotel.data;
    return hotel.map((hotel: Hotel) => ({
        ...hotel,
    }));
};

export const fetchRoom = async (id: string): Promise<RoomList[]> => {
    const getRoom = await axios.get(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`);
    const room = getRoom.data;
    return room.rooms.slice(0, 3);
};