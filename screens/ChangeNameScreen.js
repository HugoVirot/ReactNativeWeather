import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Text, View, TextInput, Button, Dimensions } from "react-native";
import HeaderUserName from "../components/HeaderUserName";

const { width } = Dimensions.get("window");

const ChangeNameScreen = (props) => {
    
  function handleSubmit() {

    dispatch({
        type: "user/storeName",
        payload: {
            userName: nameInput
        }
    });

    alert(`Le nom a bien été changé en : ${nameInput}`);
    setNameInput("");
  }

  const [nameInput, setNameInput] = useState("");
  const { dispatch } = props;

  return (
    <View style={styleSheet.container}>
      <View style={{ flex: 0 }}>
        <HeaderUserName />
      </View>
      <View style={styleSheet.bodyStyle}>
        <Text style={styleSheet.label}>Entrez votre nouveau nom</Text>
        <TextInput
          style={styleSheet.input}
          onChangeText={(text) => setNameInput(text)}
          value={nameInput}
        />
        <Button
          onPress={handleSubmit}
          title="Valider"
          color="#47B1E1"
        />
      </View>
    </View>
  );
};

ChangeNameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const styleSheet = {
  container: {
    width: width,
    flex: 1,
  },
  bodyStyle: {
    flex: 1,
    padding: 40,
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  label: {
    color: "black",
    fontSize: 20,
    padding: 20,
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
};

export default connect(({ user }) => ({ user }))(ChangeNameScreen);
