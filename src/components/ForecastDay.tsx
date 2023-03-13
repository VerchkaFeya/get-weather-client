import React from 'react';
import { TForecast } from '../types';
import { getDate, getWindDir } from '../utils';

type TForecastDay = {
  day: TForecast;
};

const ForecastDay = ({ day }: TForecastDay) => {
  const formattedDate = getDate(day.date);
  const formattedWindDir = getWindDir(day.parts.day.wind_dir);
  return (
    <div className="day">
      <div className="day__date">{formattedDate}</div>
      <img
        className="day__icon"
        src={`https://yastatic.net/weather/i/icons/funky/dark/${day.parts.day.icon}.svg`}
        alt=""
        width={60}
      />
      <div className="day__max">{`${day.parts.day.temp_max}°`}</div>
      <div className="day__min">{`${day.parts.night.temp_min}°`}</div>
      <div className="day__wind">{`${day.parts.day.wind_speed} м/с, ${formattedWindDir}`}</div>
    </div>
  );
};

export { ForecastDay };
