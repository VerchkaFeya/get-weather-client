import React from 'react';
import styled from 'styled-components';
import { TForecast } from '../types';
import { ForecastDay } from './ForecastDay';

type TForecastsList = {
  forecasts: TForecast[];
};

const ForecastList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ForecastsList = ({ forecasts }: TForecastsList) => {
  return (
    <ForecastList>
      {forecasts.map((item: TForecast, index: number) => {
        return index === 0 ? null : <ForecastDay day={item} key={index} />;
      })}
    </ForecastList>
  );
};

export { ForecastsList };
