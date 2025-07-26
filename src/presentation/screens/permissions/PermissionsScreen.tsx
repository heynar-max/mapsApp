import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/styles'
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {

    const { locationStatus, requestLocationPermission } = usePermissionStore();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Habilitar ubicación</Text>

            <Pressable
                style={ globalStyles.btnPrimary }
                onPress={ requestLocationPermission }
            >
                <Text style={styles.buttonText}>Habilitar Localización</Text>
            </Pressable>


            <Text style={styles.statusText}>Estado actual: { locationStatus }</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    statusText: {
        marginTop: 20,
        fontSize: 16,
    },
});