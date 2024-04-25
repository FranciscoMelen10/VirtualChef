import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Entypo, AntDesign, FontAwesome} from '@expo/vector-icons';
import {RecetaContext} from '../../contexts/recetaContext/recetaContext';

import React from 'react';

const Favoritos = React.lazy(() => import('../../pages/Favoritos/index'));
const Perfil = React.lazy(() => import('../../pages/Perfil/index'));
const Principal = React.lazy(() => import('../../pages/Home/Principal'));

const Tab = createMaterialBottomTabNavigator();

export default function Routers() {
  return (
    <Tab.Navigator
      initialRouteName="Principal"
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
  );
}
