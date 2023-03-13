import React from 'react';
import { TFact, TForecast } from '../types';
import { getWindDir } from '../utils';

type TTodayProps = {
  today: TFact;
  forecast: TForecast;
  yesterdayTemp: number;
};

const Today = ({ today, forecast, yesterdayTemp }: TTodayProps) => {
  const formattedWindDir = getWindDir(today.wind_dir);
  return (
    <div className="today">
      <div className="today__icon">
        <img
          src={`https://yastatic.net/weather/i/icons/funky/dark/${today.icon}.svg`}
          alt=""
          width={130}
        />
      </div>
      <div className="today__main">
        <div className="today__temp">
          <p className="today__temp-fact">{`${today.temp}°`}</p>
          <p className="today__temp-feels-like">Ощущается как {`${today.feels_like}°`}</p>
          <p className="today__temp-yesterday">Вчера в это время {`${yesterdayTemp}°`}</p>
        </div>
        <div className="today__temp-range">
          <div>
            <div className="today__temp-min">{`${forecast.parts.night.temp_min}°`}</div>
            <div>
              Минимальная температура <br /> за день
            </div>
          </div>
          <div>
            <div className="today__temp-max">{`${forecast.parts.day.temp_max}°`}</div>
            <div>
              Максимальная температура <br /> за день
            </div>
          </div>
        </div>
        <div className="today__wind">
          <div>
            <div className="today__wind-speed">{`${today.wind_speed} м/с`}</div>
            <div>Скорость ветра</div>
          </div>
          <div>
            <div className="today__wind-dir">{formattedWindDir}</div>
            <div>Направление ветра</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Today };
