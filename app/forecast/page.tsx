import type { Metadata } from "next";

export const runtime = "experimental-edge";
export const metadata: Metadata = {
  title: "Forecast",
  description: "The local forecast",
};

/**
 * Fetch the initial forecast data.
 *
 * @see https://beta.nextjs.org/docs/data-fetching/fetching
 *
 * Note: This fetch happens on the server.
 */
async function getCurrentTemp() {
  const response = await fetch(
    `https://api.open-meteo.com/v1/gfs?latitude=31.32&longitude=-85.86&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&forecast_days=1&timezone=America%2FChicago`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

/**
 * The forecast page.
 *
 * @see https://beta.nextjs.org/docs/routing/pages-and-layouts
 */
export default async function Forecast() {
  // Fetch the forecast.
  const temp = await getCurrentTemp();

  return (
    <>
      <h1>Forecast</h1>
      <p>It is currently {temp.current_weather.temperature}F</p>
    </>
  );
}
