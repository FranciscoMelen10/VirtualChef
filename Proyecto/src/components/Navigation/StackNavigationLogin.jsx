import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../../pages/Login/Login';
import Registrar from '../../pages/Login/Registrar';
import Principal from '../../pages/Home/Principal';
import VistaReceta from '../../pages/VistaReceta/VistaReceta';
import Routers from './Routers';
import {RecetaProvider} from '../../contexts/recetaContext/recetaContext';
import CrearReceta1 from '../../pages/CrearReceta/CrearReceta1';
import CrearReceta2 from '../../pages/CrearReceta/CrearReceta2';
import CrearReceta3 from '../../pages/CrearReceta/CrearReceta3';
import {UserProvider} from '../../contexts/userContext';
import BuscarRecetas from '../../pages/Buscar/index'

const Stack = createNativeStackNavigator();

export function MyStackLogin() {
  return (
    <UserProvider>
      <RecetaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Routers}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Registrar"
              component={Registrar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="VistaReceta"
              component={VistaReceta}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CrearReceta1"
              component={CrearReceta1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CrearReceta2"
              component={CrearReceta2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CrearReceta3"
              component={CrearReceta3}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Buscar"
              component={BuscarRecetas}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecetaProvider>
    </UserProvider>
  );
}

export default MyStackLogin;
