const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/";
const apiKey = "71464885ca13518dd3f388d0479a37d7";

export function getCityDataFromAPI(query = "") {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let endPoint = `weather?q=${query}&units=metric&appid=${apiKey}`;

  return fetch(baseUrl + endPoint, {
    method: "GET",
    headers,
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
