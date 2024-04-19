import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../../pages/Login/Login';
import Registrar from '../../pages/Login/Registrar';
import Principal from '../../pages/Home/Principal';
import VistaReceta from '../../pages/VistaReceta/VistaReceta';
import Routers from './Routers';
import {RecetaProvider} from '../../contexts/recetaContext/recetaContext';
import {UserProvider} from '../../contexts/userContext';

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
          </Stack.Navigator>
        </NavigationContainer>
      </RecetaProvider>
    </UserProvider>
  );
}

export default MyStackLogin;
