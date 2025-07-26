import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { MapScreent } from '../screens/maps/MapScreent';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';

export type RootStackParams = {
    LoadingScreen: undefined;
    MapScreent: undefined;
    PermissionsScreen: undefined;
}

const Stack = createStackNavigator();

export const StackNavigation =() =>  {
    return (
        <Stack.Navigator
        // initialRouteName="LoadingScreen"
        initialRouteName="PermissionsScreen"
        
        screenOptions={{
            headerShown: false,
            cardStyle: {
            backgroundColor: 'white',
            },
        }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="MapScreent" component={MapScreent} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        </Stack.Navigator>
    );
}