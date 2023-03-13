export const getDate = (stringDate: string): string => {
  const date = new Date(stringDate);
  const day = date.getDate();
  const month = date.getMonth();
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  return `${day} ${months[month]}`;
};

export const getWindDir = (windDir: string): string => {
  type TDictionary = {
    [key: string]: string;
  };
  const dictionary: TDictionary = {
    s: 'Ю',
    se: 'ЮВ',
    sw: 'ЮЗ',
    w: 'З',
    e: 'В',
    n: 'С',
    ne: 'СВ',
    nw: 'СЗ',
  };

  return `${dictionary[windDir]}`;
};

export const getCurrentTime = () => {};
