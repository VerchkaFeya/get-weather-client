import axios from 'axios';
import React from 'react';
import { ForecastsList, Today } from './components';
import { TData } from './types';
import { getDate } from './utils';

function App() {
  const [data, setData] = React.useState<TData | null>(null);
  const [lat, setLat] = React.useState<number>();
  const [lon, setLon] = React.useState<number>();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
      },
    );
  }, []);

  const clickHandler = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(`https://get-weather-server.vercel.app/weather/${lat},${lon}`);
      setData(resp.data);
    } catch (err) {
      alert('Something wrong. Try again');
      throw new Error('Unable to get weather');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="app__container">
        {!lat && (
          <div className="app__location-access">Необходимо разрешение на доступ к геолокации</div>
        )}

        {!data && lat && !isLoading && (
          <div className="app__button">
            <button className="button" onClick={clickHandler}>
              ПОЛУЧИТЬ ПРОГНОЗ ПОГОДЫ
            </button>
          </div>
        )}

        {isLoading && (
          <div className="app__loader">
            <img src="https://images.template.net/74539/880.gif" alt="loader" width={150} />
          </div>
        )}

        {data && (
          <>
            <div className="app__info">
              <h1>{`${data.geo_object.locality.name} - ${getDate(data.now_dt)}`}</h1>
              <div className="app__coord">My current location: {`lat: ${lat} , lon: ${lon}`}</div>
            </div>
            <div className="app__today">
              <Today
                today={data.fact}
                forecast={data.forecasts[0]}
                yesterdayTemp={data.yesterday.temp}
              />
            </div>
            <div className="app__forecasts">
              <ForecastsList forecasts={data.forecasts} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
