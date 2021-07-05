import { getCityDataFromAPI } from "../utils/apiRequest";

export const meteo = {

    state: {
        cities: [],               // tableau avec toutes les villes choisies
        locationInformations: {}, // infos ville où se trouve l'utilisateur
        citiesInformations: {}    // infos des villes choisies (cities)
    },

    reducers: {
        setCities(state, { cities }) {      // modifie la liste des villes (utile pour le delete)
            return { ...state, cities };
        },
        setLocationInformations(state, locationInformations) { // modifie météo de la position de l'utilisateur
            return { ...state, locationInformations };
        },
        setCitiesInformations(state, citiesInformations) {  // modifie la météo des villes choisies
            return { ...state, citiesInformations };
        },
        setNewCity(state, { cities, citiesInformations }) {  // ajoute une nouvelle ville
            return {
                ...state,
                cities,
                citiesInformations
            }
        }
    },

    effects: (dispatch) => ({

        async getLocalMeteoInformations(location) {     // récupérer météo de la position de l'utilisateur
            console.log(location);
            
            if (location) {                             // si user ok, on récupère ses coordonnées
                const { coords: { latitude, longitude } } = location;
                const lat = latitude;
                const lon = longitude;
                                                        // on récupère la météo correspondante via l'api
                const response = await getCityDataFromAPI(`lat=${lat}&lon=${lon}`); 
                if (response && typeof response === "object") {
                    this.setLocationInformations(response);
                } else {
                    console.log("erreur " + response);
                  }
            }
        },

        async addCity({ city }, rootState) {       // ajouter une ville à la liste et récupérer sa météo

            const {                                // création copie du state pour accéder à cities et citiesinformations
                meteo: {
                    cities,
                    citiesInformations
                }
            } = rootState;

            const newCities = [...cities];         // on crée une copie de la liste des villes

            newCities.unshift(city);                // on y ajoute la nouvelle ville (city)
            this.setCities({cities : newCities})
            // const response = await getCityDataFromAPI(`q=${city}`);  // On récupère la météo de la nouvelle ville

            // if (response && typeof response === "object") {
            //     const newCitiesInfos = JSON.parse(JSON.stringify(citiesInformations)); // on transforme les infos des villes en objet json
            //     newCitiesInfos[city] = response;     // on y ajoute les infos de la nouvelle ville à la clé [city] (nom nouvelle ville)
            //                                         // on utilise le reducer setNewCity pour ajouter les infos des villes actualisées
            //     this.setNewCity({ cities: newCities, citiesInformations: newCitiesInfos }); 
            // } else {
            //     console.log("erreur " + response);
            // }
        },

        deleteCity({ city }, rootState) {      // effacer la ville
            const {                            // on crée une copie du state
                meteo: {
                    cities
                }
            } = rootState;

            const newCities = [...cities];      // puis une copie de cities 
            var index = array.indexOf(city);   // on récupère l'index de la ville à supprimer
            newCities.splice(index, 1);      // on la retire des villes
            this.setCities({ cities: newCities }); // on appelle le reducer pour sauvegarder dans le state la nouvelle liste des villes
        }
    }),
};