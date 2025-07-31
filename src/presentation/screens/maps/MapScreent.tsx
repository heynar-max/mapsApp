import { StyleSheet,  View } from 'react-native'
import { Map } from '../../components/maps/Map';
import { useLocationStore } from '../../store/location/useLocationStore';
import { useEffect } from 'react';
import { LoadingScreen } from '../loading/LoadingScreen';


export const MapScreent = () => {

    const { lastKnownLocation, getLocation} = useLocationStore();

    useEffect(() => {
        if (lastKnownLocation === null){
            getLocation();
        }
    }, [getLocation,lastKnownLocation])
    
    if (lastKnownLocation === null ){
        return (<LoadingScreen/>)
    }
    return (
        <View style={styles.container}>
            <Map
            initialLocation={ lastKnownLocation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
    },
});
