export type TFact = {
  obs_time: number;
  uptime: number;
  temp: number;
  feels_like: number;
  icon: string;
  condition: string;
  cloudness: number;
  prec_type: number;
  prec_prob: number;
  prec_strength: number;
  is_thunder: false;
  wind_speed: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: boolean;
  season: string;
  source: string;
  accum_prec: {
    [key: string]: number;
  };
  soil_moisture: number;
  soil_temp: number;
  uv_index: number;
  wind_gust: number;
};

type THour = {
  [key: string]: number | string | boolean;
};

type TPart = {
  cloudness: number;
  condition: string;
  daytime: string;
  feels_like: number;
  fresh_snow_mm: number;
  humidity: number;
  icon: string;
  polar: false;
  prec_mm: number;
  prec_period: number;
  prec_prob: number;
  prec_strength: number;
  prec_type: number;
  pressure_mm: number;
  pressure_pa: number;
  soil_moisture: number;
  soil_temp: number;
  temp_avg: number;
  temp_max: number;
  temp_min: number;
  temp_water: number;
  uv_index: number;
  wind_dir: string;
  wind_gust: number;
  wind_speed: number;
  _source: string;
};

export type TForecast = {
  biomet: {
    condition: string;
    index: number;
  };
  date: string;
  date_ts: number;
  hours: THour[];
  moon_code: number;
  moon_text: string;
  parts: {
    [key: string]: TPart;
  };
  rise_begin: string;
  set_end: string;
  sunrise: string;
  sunset: string;
  week: number;
};

export type TData = {
  fact: TFact;
  forecasts: TForecast[];
  geo_object: {
    country: { id: number; name: string };
    district: { id: number; name: string };
    locality: { id: number; name: string };
    province: { id: number; name: string };
  };
  info: {
    def_pressure_mm: number;
    def_pressure_pa: number;
    f: boolean;
    geoid: number;
    lat: number;
    lon: number;
    n: boolean;
    nr: boolean;
    ns: boolean;
    nsr: boolean;
    p: boolean;
    slug: string;
    tzinfo: { name: string; abbr: string; dst: boolean; offset: number };
    url: string;
    zoom: number;
    _h: boolean;
  };
  now: number;
  now_dt: string;
  yesterday: {
    temp: number;
  };
};
