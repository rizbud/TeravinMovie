import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/HomeScreen'
import DetailScreen from '../Containers/DetailScreen'

const Stack = createSharedElementStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={navigation => ({
            headerShown: false,
            headerBackTitleVisible: false,
              cardStyleInterpolator: ({current: {progress}}) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                }
              }
          })}
          sharedElementsConfig={(route) => {
            const { item } = route.params;
            return [{
              id: `item.${item?.image_url}.photo`,
              animation: 'move',
              resize: 'clip',
              align: 'left-top'
            }];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
