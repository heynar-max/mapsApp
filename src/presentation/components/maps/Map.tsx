import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Location } from "../../../infrastructure/interfaces/location";
import { FAB } from "../ui/FAB";

interface Props {
    showsUserLocation?: boolean;
    initialLocation: Location;
}

export const Map = ({showsUserLocation = true, initialLocation}: Props) => {
    

    return (
        <>
        <MapView
        showsUserLocation={showsUserLocation}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{flex:1}}
            region={{
                latitude: initialLocation.latitude,
                longitude: initialLocation.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >

        </MapView>

        <FAB
            iconName="compass-outline"
            onPress={ () => console.log('hola')}
            style={{
                bottom: 20,
                right: 20,
            }}
        />
        </>
    );
};