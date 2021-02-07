// import { requestGet } from "../utils/requestApi";

// export const meteo = {
//     state: {
//         cities: [],              //tableau avec toutes les villes choisies
//         informations: {},        //infos ville où se trouve l'utilisateur
//         citiesInformations: {}   //infos des villes choisies (cities)
//     },
//     reducers: {
//         setCities(state, { cities }) {
//             return { ...state, cities };
//         },
//         setInformations(state, informations) {
//             return { ...state, informations };
//         },
//         setCitiesInformations(state, citiesInformations) {
//             return { ...state, citiesInformations };
//         },
//         setNewCity(state, { cities, citiesInformations }) {
//             return {
//                 ...state,
//                 cities,
//                 citiesInformations
//             }
//         }
//     },
//     effects: (dispatch) => ({
//         async getLocalMeteoInformations(location) {
//             console.log(location);
//             if (location) {
//                 const { coords: { latitude, longitude } } = location;
//                 const lat = latitude;
//                 const lon = longitude;

//                 const response = await requestGet('weather', `lat=${lat}&lon=${lon}&units=metric`);
//                 if (response) {
//                     this.setInformations(response);
//                 }
//             }
//         },
//         async addCity({ city }, rootState) {
//             const {
//                 meteo: {
//                     cities,
//                     citiesInformations
//                 }
//             } = rootState;
//             const newCities = [...cities];
//             newCities.unshift(city);
//             // Request infos for new city
//             const response = await requestGet('weather', `q=${city}&units=metric`);
//             if (response) {
//                 const newInfos = JSON.parse(JSON.stringify(citiesInformations));
//                 newInfos[city] = response;
//                 this.setNewCity({ cities: newCities, citiesInformations: newInfos });
//             }
//         },
//         deleteCity({ city }, rootState) {
//             const {
//                 meteo: {
//                     cities
//                 }
//             } = rootState;
//             const newCities = [...cities];
//             var index = array.indexOf(city);
//             newCities.splice(index, 1);
//             this.setCities({ cities: newCities });
//         }
//     }),
// };