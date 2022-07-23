import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';

import {
  FilterBtn,
  FilterHeading,
  FiltersWrapper,
  FilterValue,
  FilterWrapper,
  StarFilter,
} from './FilterCard.styles';

interface FilterCardProps {
  incrementChildHandler: React.MouseEventHandler<HTMLButtonElement>;
  decrementChildHandler: React.MouseEventHandler<HTMLButtonElement>;
  childCapacity: number;
  incrementAdultHandler: React.MouseEventHandler<HTMLButtonElement>;
  decrementAdultHandler: React.MouseEventHandler<HTMLButtonElement>;
  adultCapacity: number;
}

export const FilterCard: React.FC<FilterCardProps> = ({
  incrementChildHandler,
  decrementChildHandler,
  childCapacity,
  incrementAdultHandler,
  decrementAdultHandler,
  adultCapacity,
}) => {
  // const [childCapacity, setChildCapacity] = useState<number>(0);
  // const [adultCapacity, setAdultCapacity] = useState<number>(0);
  // const [rating, setRating] = useState<number>(0);

  // const incrementChildHandler: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = (): void => {
  //   setChildCapacity((prevState) => prevState + 1);
  // };

  // const decrementChildHandler: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = (): void => {
  //   if (childCapacity > 0) {
  //     setChildCapacity((prevState) => prevState - 1);
  //   }
  // };

  // const incrementAdultHandler: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = (): void => {
  //   setAdultCapacity((prevState) => prevState + 1);
  // };

  // const decrementAdultHandler: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = (): void => {
  //   if (adultCapacity > 0) {
  //     setAdultCapacity((prevState) => prevState - 1);
  //   }
  // };
  return (
    <div>
      <FilterWrapper>
        {/* <StarFilter>
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
        </StarFilter> */}
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
    </div>
  );
};
