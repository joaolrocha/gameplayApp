import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Children } from "react";
import { Background } from "../components/Background";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: { backgroundColor: Background},
      }} 

    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />


    </Navigator>
  )
}