import React from 'react';
import {
  HeadingWrapper,
  MainDesc,
  MainHeading,
  MainWrapper,
} from './App.styles';
import { HotelCard } from './components/HotelCard/HotelCard';
import { GlobalStyle } from './Global-style.styles';

function App() {
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
      </MainWrapper>
      <HotelCard />
    </div>
  );
}

export default App;

