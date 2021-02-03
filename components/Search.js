import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import { getCityDataFromAPI } from "../utils/apiRequest";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.searchedText = "";
    this.icon = 

    this.state = {
      cityInformations: "",
      icon: ""
    };
  }

  setCityInput(text) {
    this.searchedText = text;
  }

  async getCity(city) {
    const response = await getCityDataFromAPI(city);
    if (response) {
      console.log("requête ok");
      console.log(response);
      this.setState({ cityInformations: response }, () =>
        // console.log(this.state.cityInformations);
        this.setState({ icon : 'http://openweathermap.org/img/w/' + this.state.cityInformations.weather[0].icon + '.png' })
      );
    }
  }

  render() {
    return (
      <View>
        <Text>Choisissez une ville</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setCityInput(text)}
        ></TextInput>
        <Button
          style={styles.textInput}
          onPress={() => this.getCity(this.searchedText)}
          title="Valider"
        ></Button>
        
        {this.state.cityInformations !== "" ? (
          <View style={styles.view}>
            <Text>{this.state.cityInformations.name}</Text>
            <Text>{this.state.cityInformations.main.temp}°C</Text>
            <Image style={styles.image} source={{ uri: this.state.icon }}></Image>
            <Text>{this.state.cityInformations.weather[0].main}</Text>
          </View>
        ) : (
          <Text>Pas de ville sélectionnée</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100px'
  },
  view : {
    textAlign : 'center'
  },
  textInput: {
    height: "20px",
    color: "darkblue",
    backgroundColor: "white",
  },
  button: {
    color: "white",
  },
});

export default Search;
