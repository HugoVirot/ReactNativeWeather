import React from "react";
import { StyleSheet } from "react-native";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import Navigator from "./navigation/Navigator";
import { user } from './models/userModel';
import { meteo } from './models/meteoModel';

const store = init({
  models: { user, meteo },
});

export default function App() {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
