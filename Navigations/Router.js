import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/LogIn/Login"
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import {useDispatch, useSelector} from "react-redux"

const Stack = createNativeStackNavigator();
function Router() {
const user = useSelector(state=>state.user.value)
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        {user.isLoading?  MainStack(Stack):AuthStack(Stack) }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router