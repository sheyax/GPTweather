import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery(
    $current: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,weathercode,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current: $current
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current {
        interval
        is_day
        temperature_2m
        time
        weather_code
        wind_direction_10m
        wind_speed_10m
      }
      current_units {
        interval
        is_day
        temperature_2m
        time
        weather_code
        wind_direction_10m
        wind_speed_10m
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dew_point_2m
        precipitation_probability
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        wind_gusts_10m
      }
      hourly_units {
        apparent_temperature
        dew_point_2m
        precipitation_probability
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        wind_gusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
