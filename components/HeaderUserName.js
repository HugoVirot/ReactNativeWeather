import { Avatar, Header } from "react-native-elements";
import React, { useState, useEffect, componentDidUpDate } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styleSheet = {
  headerStyle: {
    height: 90,
  },
  textStyle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
};

const HeaderUserName = () => {
    
  async function getName() {
    const temp = await AsyncStorage.getItem("userName");
    setName(temp);
  }

  useEffect(() => {
    getName();
  });

  const [userName, setName] = useState(""); // permet de faire référence au state du composant, et d'utiliser setName ligne 23

  return (
    <Header backgroundColor="darkblue" containerStyle={styleSheet.headerStyle}>
      <Avatar
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        size="medium"
      />
      <Text style={styleSheet.textStyle}>Salut {userName}</Text>
    </Header>
  );
};

export default HeaderUserName;
