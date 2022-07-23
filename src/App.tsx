import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  HeadingWrapper,
  MainDesc,
  MainHeading,
  MainWrapper,
} from './App.styles';
import { FilterCard } from './components/FilterCard/FilterCard';
import { StarFilter } from './components/FilterCard/FilterCard.styles';
import { HotelCard } from './components/HotelCard/HotelCard';
import { globalContent, GlobalContext } from './contexts/GlobalContext';
import { GlobalStyle } from './Global-style.styles';

function App() {
  const [childCapacity, setChildCapacity] = useState<number>(0);
  const [adultCapacity, setAdultCapacity] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  let defaultValues: globalContent = {
    childCapacity,
    adultCapacity,
    rating,
  };

  const incrementChildHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    setChildCapacity((prevState) => prevState + 1);
  };

  const decrementChildHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    if (childCapacity > 0) {
      setChildCapacity((prevState) => prevState - 1);
    }
  };

  const incrementAdultHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    setAdultCapacity((prevState) => prevState + 1);
  };

  const decrementAdultHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    if (adultCapacity > 0) {
      setAdultCapacity((prevState) => prevState - 1);
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <MainWrapper>
        <HeadingWrapper>
          <MainHeading>Enjoy Your Dream Stay</MainHeading>
          <MainDesc>
            Irure ullamco ut adipisicing velit aliquip laborum.
          </MainDesc>
        </HeadingWrapper>
        <FilterCard
          adultCapacity={adultCapacity}
          childCapacity={childCapacity}
          incrementChildHandler={incrementChildHandler}
          decrementChildHandler={decrementChildHandler}
          incrementAdultHandler={incrementAdultHandler}
          decrementAdultHandler={decrementAdultHandler}
        />
        <StarFilter>
          {[...Array(5)].map((_, index) => {
            index += 1;
            return (
              <span key={index}>
                <AiFillStar
                  cursor="pointer"
                  size={32}
                  style={{ color: index <= rating ? 'orange' : '#ccc' }}
                  onClick={() => setRating(index)}
                ></AiFillStar>
              </span>
            );
          })}
        </StarFilter>
      </MainWrapper>
      <GlobalContext.Provider value={defaultValues}>
        <HotelCard />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
