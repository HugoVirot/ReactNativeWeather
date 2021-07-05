const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/";
const apiKey = "0dc3df573943b23e133f0dd1d5c0094c";

export function getCityDataFromAPI(query) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let endPoint = `weather?${query}&units=metric&appid=${apiKey}`;

  return fetch(baseUrl + endPoint, {
    method: "GET",
    headers,
    // credentials: "include",
    // method: "GET",
    // mode: 'no-cors',
    // headers: { "Content-Type": "text/plain" },
  }).then((response) => {
    if (response.status === 200) {
      return response
        .json()
        .then((json) => {
          return json !== undefined ? json : {};
        })
        .catch((e) => ({}));
    }
    return response.status;
  });
}
