import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, Text, TextInput, Button } from "react-native";
import CitiesList from "../components/CitiesList";
import HeaderUserName from "../components/HeaderUserName";

const AddCityScreen = (props) => {
  function handleSubmit() {
    dispatch({
      type: "meteo/addCity",
      payload: {
        city: cityInput,
      },
    });
    setCityInput("");
  }

  const [cityInput, setCityInput] = useState("");
  const { dispatch } = props;

  return (
    //formulaire ajout ville
    <View>
      <HeaderUserName />
      <View style={styleSheet.formStyle}>
        <Text style={styleSheet.label}>Tapez le nom d une ville</Text>
        <TextInput
          style={styleSheet.input}
          onChangeText={(text) => setCityInput(text)}
          value={cityInput}
        />
        <Button title="Valider" onPress={handleSubmit} color="#47B1E1" />
      </View>
      <CitiesList />
    </View>
  );
};

const styleSheet = {
  textStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  bodyStyle: {
    flex: 1,
    padding: 40,
    flexDirection: "column",
  },
  label: {
    color: "black",
    fontSize: 18,
  },
  formStyle: {
    // textAlign: 'center',
    width: "80%",
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 35,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
};

AddCityScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect((state) => state.meteo)(AddCityScreen);
