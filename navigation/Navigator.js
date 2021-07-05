import * as React from "react";
import { View, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import AddCityScreen from "../screens/AddCityScreen";
import ChangeNameScreen from "../screens/ChangeNameScreen";

function DisplayHomeScreen( {navigation} ) {
  return (
    <View>
    <HomeScreen></HomeScreen>
    <Button
        title="updatePage"
        onPress={() => navigation.navigate('Changer nom')}
      />
    </View>
  );
}

function DisplayAddCityScreen() {
  return (
    <AddCityScreen></AddCityScreen>
  );
}

function DisplayChangeNameScreen() {
  return (
    <ChangeNameScreen></ChangeNameScreen>
  );
}


const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Accueil") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Ajouter une ville") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Changer nom") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            } else if (route.name === "Déconnexion") {
              iconName = focused ? "log-out" : "log-out-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "darkblue",
          inactiveTintColor: "gray",
          navigationOptions: {navigationOptions: () => doWhatever()}
        }}
      >
        <Tab.Screen name="Accueil" component={DisplayHomeScreen} />
        <Tab.Screen name="Ajouter une ville" component={DisplayAddCityScreen} />
        <Tab.Screen name="Changer nom" component={DisplayChangeNameScreen} />
        <Tab.Screen name="Déconnexion" component={DisplayChangeNameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
