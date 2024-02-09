import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import RankingScreen from "./RankingScreen";
import CalendarScreen from "./CalendarScreen";
import MesTests from "./MesTests";
import NewsReading from "./NewsReading";
import { Screen } from "react-native-screens";

function WelcomeScreen(props) {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ranking" component={MesTests} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
      <Navigator>
        <Screen name="NewsReading" component={NewsReading} />
      </Navigator>
    </NavigationContainer>
  );
}

export default WelcomeScreen;

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
