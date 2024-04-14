import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Entypo, AntDesign, FontAwesome} from '@expo/vector-icons';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import React from 'react';

const Favoritos = React.lazy(() => import('../../pages/Favoritos/index'));
const Perfil = React.lazy(() => import('../../pages/Perfil/index'));
const Principal = React.lazy(() => import('../../pages/Home/Principal'));
const VistaReceta = React.lazy(
  () => import('../../pages/VistaReceta/VistaReceta'),
);


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <React.Suspense
      fallback={
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color={"#246C2C"}/>
        </View>
      }
    >
      <Tab.Navigator
        initialRouteName="Favoritos"
        activeColor="#FFF"
        inactiveColor="#002205"
        activeIndicatorStyle={{backgroundColor: '#00FF0000 '}}
        barStyle={{backgroundColor: '#246C2C', borderColor: '#000'}}
      >
        <Tab.Screen
          name="Principal"
          component={Principal}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="heart" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="user" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </React.Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default function Routers() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
