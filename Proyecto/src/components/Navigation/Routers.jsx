import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Entypo, AntDesign, FontAwesome} from '@expo/vector-icons';

import Favoritos from '../../pages/Favoritos/index';
import Perfil from '../../pages/Perfil/index';
import Principal from '../../pages/Home/Principal';
import VistaReceta from '../../pages/VistaReceta/VistaReceta';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
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
        name="Receta"
        component={VistaReceta}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="open-book" size={25} color={color} />
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

export default function Routers() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
