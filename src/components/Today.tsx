import React from 'react';
import styled from 'styled-components';
import { TFact, TForecast } from '../types';
import { getWindDir } from '../utils';

type TTodayProps = {
  today: TFact;
  forecast: TForecast;
  yesterdayTemp: number;
};

interface IFlexProps {
  align: string;
  direction: string;
  justifyContent: string;
  gap: string;
}

interface ITextProps {
  size?: string;
  color?: string;
  weight?: string;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  gap: ${({ gap }) => gap || '0'};
`;

const InnerFlex = styled(Flex)`
  color: gray;
  text-align: center;
`;

const OuterFlex = styled(Flex)`
  width: 100%;
  margin: 0 40px;
  flex-wrap: wrap;
`;

const Text = styled.div<ITextProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
`;

const TextSecondaryValues = styled.div`
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;

const TodayStyled = styled.div`
  width: 100%;
  border: 1px solid #e9f1f3;
  background-color: #eef4f6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Today = ({ today, forecast, yesterdayTemp }: TTodayProps) => {
  const formattedWindDir = getWindDir(today.wind_dir);
  return (
    <TodayStyled>
      <div>
        <img
          src={`https://yastatic.net/weather/i/icons/funky/dark/${today.icon}.svg`}
          alt=""
          width={130}
        />
      </div>
      <OuterFlex align="center" direction="row" gap="30px" justifyContent="space-between">
        <InnerFlex align="center" direction="column" gap="0" justifyContent="center">
          <Text color="black" size="2.5rem" className="today__temp-fact">{`${today.temp}°`}</Text>
          <Text size="1rem" color="gray" className="today__temp-feels-like">
            Ощущается как {`${today.feels_like}°`}
          </Text>
          <Text size="1rem" color="gray" className="today__temp-yesterday">
            Вчера в это время {`${yesterdayTemp}°`}
          </Text>
        </InnerFlex>
        <InnerFlex align="center" direction="column" gap="10px" justifyContent="center">
          <div>
            <TextSecondaryValues>{`${forecast.parts.night.temp_min}°`}</TextSecondaryValues>
            <Flex align="center" direction="column" gap="0" justifyContent="center">
              Минимальная температура <br /> за день
            </Flex>
          </div>
          <div>
            <TextSecondaryValues>{`${forecast.parts.day.temp_max}°`}</TextSecondaryValues>
            <Flex align="center" direction="column" gap="0" justifyContent="center">
              Максимальная температура <br /> за день
            </Flex>
          </div>
        </InnerFlex>
        <InnerFlex align="center" direction="column" gap="10px" justifyContent="center">
          <div>
            <TextSecondaryValues>{`${today.wind_speed} м/с`}</TextSecondaryValues>
            <div>Скорость ветра</div>
          </div>
          <div>
            <TextSecondaryValues>{formattedWindDir}</TextSecondaryValues>
            <div>Направление ветра</div>
          </div>
        </InnerFlex>
      </OuterFlex>
    </TodayStyled>
  );
};

export { Today };
