import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "../../pages/Home/Principal";
import { NavigationContainer } from "@react-navigation/native";
import VistaReceta from "../../pages/VistaReceta/VistaReceta";

const Stack = createNativeStackNavigator();

export function MyStackLogin() {
  return (
    <NavigationContainer theme={{ colors: "#FFF" }}>
      <Stack.Navigator>
        <Stack.Screen
          name="VistaReceta"
          component={VistaReceta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registrar"
          component={Registrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStackLogin;
