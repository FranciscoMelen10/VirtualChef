import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Login/Login";
import Registrar from "../../pages/Login/Registrar";
import Principal from "../../pages/Home/Principal";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function MyStackLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
