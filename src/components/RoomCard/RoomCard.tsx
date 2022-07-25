import React, { useCallback, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { fetchRoom, RoomList, RoomsEntity } from '../../utils/api';
import { Errorcard } from '../ErrorCard/ErrorCard';
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
  const [error, setError] = useState<boolean>(true);

  const getRoom = useCallback(async () => {
    setError(false);
    try {
      const getRooms = await fetchRoom(id);
      setRooms(getRooms);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    getRoom();
  }, [getRoom]);

  const { childCapacity, adultCapacity } = useContext(GlobalContext);

  return (
    <div>
      {error ? (
        <Errorcard onClickHandler={getRoom} label="Try Again!" />
      ) : (
        <div>
          {rooms !== undefined &&
            rooms.map(
              (room: RoomsEntity) =>
                childCapacity <= room.occupancy.maxChildren &&
                adultCapacity <= room.occupancy.maxAdults && (
                  <div key={room.name}>
                    <hr></hr>
                    <RoomWrapper key={room.name}>
                      <div>
                        <RoomName>{room.name}</RoomName>
                        <Roomoccupancy>
                          adult: {room.occupancy.maxAdults}
                        </Roomoccupancy>
                        <Roomoccupancy>
                          children: {room.occupancy.maxChildren}
                        </Roomoccupancy>
                      </div>
                      <div>
                        <RoomDesc>{room.longDescription}</RoomDesc>
                      </div>
                    </RoomWrapper>
                  </div>
                )
            )}
        </div>
      )}
    </div>
  );
};
