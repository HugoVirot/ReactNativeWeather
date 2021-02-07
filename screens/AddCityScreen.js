import React from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import HeaderUserName from "../components/HeaderUserName";
import Search from "../components/Search"

const AddCityScreen = () => {

  return (
      <View>
        <HeaderUserName />
        <Search></Search>
      </View>
  );
};

export default connect() (AddCityScreen);
