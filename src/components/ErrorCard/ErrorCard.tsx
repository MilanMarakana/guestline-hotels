import React from 'react';
// import { fetchHotel, fetchRoom } from '../../utils/api';
// import { ErrorButton } from '../ErrorButton/ErrorButton';
import { ErrorBtn, ErrorCardContainer, ErrorText } from './ErrorCard.styles';

interface ErrorButtonProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

export const Errorcard: React.FC<ErrorButtonProps> = ({
  label,
  onClickHandler,
}) => {
  return (
    <ErrorCardContainer>
      <ErrorText>Oops!😒 something went wrong</ErrorText>
      <ErrorBtn data-testid="btn" onClick={onClickHandler}>
        {label}
      </ErrorBtn>
    </ErrorCardContainer>
  );
};
