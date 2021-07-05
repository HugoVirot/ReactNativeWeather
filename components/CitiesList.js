import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Text } from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";

const CitiesList = (props) => {
  function handleDeleting() {
    dispatch({
      type: "meteo/deleteCity",
      payload: {
        city: cityName,
      },
    });
  }

  // const { dispatch, cities, citiesInformations } = props;
  const { dispatch, cities } = props;

  const styleSheet = {
    ville: {
      color: "black",
      fontWeight: "bold",
      backgroundColor: 'blue'
    },
  };

  console.log(cities)

  return (
    // <Text>{cities}</Text>
    <Card title="Vos villes favorites :">
      {cities.length > 0 ? (
        cities.map((cityName) => {
          return (
            <ListItem key={cityName} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{cityName}</ListItem.Title>
              </ListItem.Content>
              <Icon name="clear" type="material" onPress={handleDeleting} />
              <ListItem.Chevron />
            </ListItem>
          )
        })) : (
          <Text>Pas de villes...</Text>
        )}
    </Card>
  );
};

CitiesList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect((state) => state.meteo)(CitiesList);
