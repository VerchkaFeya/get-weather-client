import React from 'react';
import styled from 'styled-components';
import { TForecast } from '../types';
import { getDate, getWindDir } from '../utils';

type TForecastDay = {
  day: TForecast;
};

interface ITextProps {
  size?: string;
  color?: string;
  weight?: string;
}

const Card = styled.div`
  height: auto;
  min-width: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgba(12, 8, 8, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
`;

const Text = styled.div<ITextProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
`;

const ForecastDay = ({ day }: TForecastDay) => {
  const formattedDate = getDate(day.date);
  const formattedWindDir = getWindDir(day.parts.day.wind_dir);
  return (
    <Card className="day">
      <Text weight="700">{formattedDate}</Text>
      <img
        src={`https://yastatic.net/weather/i/icons/funky/dark/${day.parts.day.icon}.svg`}
        alt=""
        width={60}
      />
      <Text size="1.5rem">{`${day.parts.day.temp_max}°`}</Text>
      <Text size="1rem" color="gray">{`${day.parts.night.temp_min}°`}</Text>
      <Text
        size="0.9rem"
        color="gray">{`${day.parts.day.wind_speed} м/с, ${formattedWindDir}`}</Text>
    </Card>
  );
};

export { ForecastDay };
