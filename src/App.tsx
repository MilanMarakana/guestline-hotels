import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';
import {
  FilterBtn,
  FilterHeading,
  FiltersWrapper,
  FilterValue,
  FilterWrapper,
  HeadingWrapper,
  MainDesc,
  MainHeading,
  MainWrapper,
  StarFilter,
} from './App.styles';
import { HotelCard } from './components/HotelCard/HotelCard';
import { globalContent, GlobalContext } from './contexts/GlobalContext';
import { GlobalStyle } from './Global-style.styles';

const App: React.FC = () => {
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
        <FilterWrapper>
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
          <FiltersWrapper>
            <FilterHeading>Child :</FilterHeading>
            <FilterBtn onClick={incrementChildHandler}>
              <BiPlus cursor="pointer" size={20} />
            </FilterBtn>
            <FilterValue>{childCapacity}</FilterValue>
            <FilterBtn onClick={decrementChildHandler}>
              <BiMinus cursor="pointer" size={20} />
            </FilterBtn>
          </FiltersWrapper>
          <FiltersWrapper>
            <FilterHeading>Adult :</FilterHeading>
            <FilterBtn onClick={incrementAdultHandler}>
              <BiPlus cursor="pointer" size={20} />
            </FilterBtn>
            <FilterValue>{adultCapacity}</FilterValue>
            <FilterBtn onClick={decrementAdultHandler}>
              <BiMinus cursor="pointer" size={20} />
            </FilterBtn>
          </FiltersWrapper>
        </FilterWrapper>
      </MainWrapper>
      <GlobalContext.Provider value={defaultValues}>
        <HotelCard />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
