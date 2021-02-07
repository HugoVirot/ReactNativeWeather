import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import { getCityDataFromAPI } from "../utils/apiRequest";

class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.searchedText = "";

    this.state = {
      cityInformations: "",
    };
  }

  setCityInput(text) {
    this.searchedText = text;
  }

  async getCity(city) {
    const response = await getCityDataFromAPI(city);
    if (response && typeof response === "object") {
      console.log("requête ok");
      console.log(response);
      this.setState({ cityInformations: response }, () =>
        console.log(this.state.cityInformations)
      );
    } else {
      console.log("erreur " + response);
    }
  }

  render() {
    return (
      <View style={styles.bodyStyle, styles.main}>
        <Text style={styles.label}>Choisissez une ville</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setCityInput(text)}
        ></TextInput>
        <Button
          style={styles.button}
          onPress={() => this.getCity(this.searchedText)}
          title="Valider"
        ></Button>

        {this.state.cityInformations !== "" ? (
          <View style={styles.results}>
            <Text>{this.state.cityInformations.name}</Text>
            <Text>{this.state.cityInformations.main.temp}°C</Text>
            <View style={styles.view}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    "http://openweathermap.org/img/wn/" +
                    this.state.cityInformations.weather[0].icon +
                    ".png",
                }}
              ></Image>
            </View>
            {/* <Text>{this.state.cityInformations.weather[0].main}</Text> */}
          </View>
        ) : (
          <Text>Pas de ville sélectionnée</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 200,
    padding : 40,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '20px'
  },
  image: {
    width: "50px",
    height: "50px",
    margin: "0 auto",
  },
  results: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
},
  label: {
    color: "black",
    fontSize: 20,
    padding: 20
  },
  form: {
    borderColor: "#47B1E1",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    color: "white",
  },
});

export default Search;
