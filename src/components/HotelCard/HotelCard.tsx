import React, { useState, useCallback, useEffect } from 'react';
import { fetchHotel, HotelList } from '../../utils/api';

export const HotelCard = () => {
  const [hotel, setHotel] = useState<HotelList[]>([]);

  const getHotel = useCallback(async () => {
    const getHotels = await fetchHotel();
    console.log(getHotels);
    setHotel(getHotels);
  }, []);

  useEffect(() => {
    getHotel();
  }, [getHotel]);

  return (
    <div>
      <h1>this is an hotel page</h1>
    </div>
  );
};
