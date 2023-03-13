import React from 'react';
import { TForecast } from '../types';
import { ForecastDay } from './ForecastDay';

type TForecastsList = {
  forecasts: TForecast[];
};

const ForecastsList = ({ forecasts }: TForecastsList) => {
  return (
    <div className="forecasts-list">
      {forecasts.map((item: TForecast, index: number) => {
        return index === 0 ? null : <ForecastDay day={item} key={index} />;
      })}
    </div>
  );
};

export { ForecastsList };
