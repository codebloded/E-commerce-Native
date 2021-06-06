import * as Location from "expo-location"
import { useEffect, useState } from "react";
export default function useLocation() {
    const [location, setLocation] = useState()
    const getLocationPermission = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude })

    }
    useEffect(() => {
        getLocationPermission()
    }, [])

    return location;
}