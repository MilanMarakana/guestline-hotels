import React, { useState, useCallback, useEffect, useContext } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Watch } from 'react-loader-spinner';
import { GlobalContext } from '../../contexts/GlobalContext';

import { fetchHotel, HotelList } from '../../utils/api';
import { Errorcard } from '../ErrorCard/ErrorCard';
import { RoomCard } from '../RoomCard/RoomCard';
import {
  HotelCards,
  HotelCardWrapper,
  HotelDesc,
  HotelImg,
  LeftArrow,
  RightArrow,
  Silder,
  StarWrapper,
} from './HotelCard.styles';

export const HotelCard: React.FC = () => {
  const [hotels, setHotels] = useState<HotelList[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);

  const getHotel = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const getHotels = await fetchHotel();
      setHotels(getHotels);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getHotel();
  }, [getHotel]);

  const sildeLength = hotels.map((htel) => htel.images.length);

  const nextSlide: React.MouseEventHandler<HTMLOrSVGElement> = (): void => {
    setCurrent(current === sildeLength.length - 2 ? 0 : current + 1);
  };

  const prevSlide: React.MouseEventHandler<HTMLOrSVGElement> = (): void => {
    setCurrent(current === 0 ? sildeLength.length - 2 : current - 1);
  };

  const { rating } = useContext(GlobalContext);

  return (
    <>
      {loading && (
        <Watch
          height={100}
          width={100}
          color="#355764"
          wrapperStyle={{
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      )}
      {error ? (
        <Errorcard label="Try Again!" onClickHandler={getHotel} />
      ) : (
        <div>
          {hotels.map(
            (htel) =>
              rating <= parseInt(htel.starRating) && (
                <HotelCardWrapper key={htel.id}>
                  <HotelCards key={htel.name}>
                    <Silder>
                      <LeftArrow
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
                          {index === current && silde.url && (
                            <HotelImg src={silde.url} alt="not found" />
                          )}
                        </div>
                      ))}

                      <RightArrow
                        cursor="pointer"
                        style={{
                          position: 'absolute',
                          color: '#fff',
                          strokeWidth: '50px',
                        }}
                        size={30}
                        onClick={nextSlide}
                      />
                    </Silder>
                    <HotelDesc>
                      <div>
                        <h1>{htel.name}</h1>
                        <p>{htel.address1}</p>
                      </div>
                      <div>
                        <StarWrapper>
                          {[...new Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < parseInt(htel.starRating) ? (
                                <AiFillStar size={28} fill="orange" />
                              ) : (
                                <AiOutlineStar size={28} />
                              )}
                            </span>
                          ))}
                        </StarWrapper>
                      </div>
                    </HotelDesc>
                  </HotelCards>
                  <RoomCard id={htel.id} />
                </HotelCardWrapper>
              )
          )}
        </div>
      )}
    </>
  );
};
