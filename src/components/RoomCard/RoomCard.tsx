import React, { useCallback, useEffect, useState } from 'react';
import { fetchRoom, RoomList, RoomsEntity } from '../../utils/api';
import {
  RoomDesc,
  RoomName,
  Roomoccupancy,
  RoomWrapper,
} from './RoomCard.styles';

type Props = {
  id: string;
};

export const RoomCard: React.FC<Props> = ({ id }) => {
  const [rooms, setRooms] = useState<RoomList | undefined | null | any>([]);

  const getRoom = useCallback(async () => {
    const getRooms = await fetchRoom(id);
    setRooms(getRooms);
  }, [id]);

  useEffect(() => {
    getRoom();
  }, [getRoom]);

  return (
    <div>
      {rooms !== undefined &&
        rooms.map((room: RoomsEntity) => (
          <div key={room.name}>
            <hr></hr>
            <RoomWrapper key={room.name}>
              <div>
                <RoomName>{room.name}</RoomName>
                <Roomoccupancy>adult: {room.occupancy.maxAdults}</Roomoccupancy>
                <Roomoccupancy>
                  children: {room.occupancy.maxChildren}
                </Roomoccupancy>
              </div>
              <div>
                <RoomDesc>{room.longDescription}</RoomDesc>
              </div>
            </RoomWrapper>
          </div>
        ))}
    </div>
  );
};
