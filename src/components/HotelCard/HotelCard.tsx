import React, { useState, useCallback, useEffect } from 'react';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineRight,
  AiOutlineLeft,
} from 'react-icons/ai';

import { fetchHotel, HotelList } from '../../utils/api';
import {
  HotelCards,
  HotelCardWrapper,
  HotelDesc,
  HotelImg,
  Silder,
  StarWrapper,
} from './HotelCard.styles';

export const HotelCard = () => {
  const [hotel, setHotel] = useState<HotelList[]>([]);
  const [current, setCurrent] = useState<number>(0);

  const getHotel = useCallback(async () => {
    const getHotels = await fetchHotel();
    console.log(getHotels);
    setHotel(getHotels);
  }, []);

  useEffect(() => {
    getHotel();
  }, [getHotel]);

  const sildeLength = hotel.map((htel) => htel.images.length);

  const nextSlide: React.MouseEventHandler<HTMLOrSVGElement> = (): void => {
    setCurrent(current === sildeLength.length - 2 ? 0 : current + 1);
  };

  const prevSlide: React.MouseEventHandler<HTMLOrSVGElement> = (): void => {
    setCurrent(current === 0 ? sildeLength.length - 2 : current - 1);
  };

  return (
    <div>
      {hotel.map((htel) => (
        <HotelCardWrapper key={htel.id}>
          <HotelCards key={htel.name}>
            <Silder>
              <AiOutlineLeft
                cursor="pointer"
                style={{
                  position: 'absolute',
                  color: '#fff',
                  left: '5px',
                  strokeWidth: '50px',
                }}
                size={30}
                onClick={prevSlide}
              />
              {htel.images.map((silde, index) => (
                <div
                  style={{
                    opacity: index === current ? 1 : 0,
                  }}
                  key={index}
                >
                  {index === current && (
                    <HotelImg src={silde.url} alt="not found" />
                  )}
                </div>
              ))}

              <AiOutlineRight
                cursor="pointer"
                style={{
                  position: 'absolute',
                  color: '#fff',
                  left: '150px',
                  strokeWidth: '50px',
                }}
                size={30}
                onClick={nextSlide}
              />
            </Silder>
            <HotelDesc>
              <h1>{htel.name}</h1>
              <p>{htel.address1}</p>
            </HotelDesc>
            <StarWrapper>
              {[...new Array(5)].map((_, i) => (
                <span key={i}>
                  {i < parseInt(htel.starRating) ? (
                    <AiFillStar size={30} fill="orange" />
                  ) : (
                    <AiOutlineStar size={30} />
                  )}
                </span>
              ))}
            </StarWrapper>
          </HotelCards>
        </HotelCardWrapper>
      ))}
    </div>
  );
};
