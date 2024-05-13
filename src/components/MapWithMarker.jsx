import React from 'react'
import { GoogleMap, Marker, useJsApiLoader, } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '80vh'
};

const center = {
    lat: 23.810331,
    lng: 90.412521
};

function MapWithMarker() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyANM-S8csQhiY7y2RGmzCD1PDN0dIxFzlY"
    })

    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);

    //     setMap(map)
    // }, [])

    const onLoad = (marker) => {
        console.log('marker: ', marker);

    }

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        >
            <>
                <Marker
                    onLoad={onLoad}
                    position={center}
                    title="Dhaka, Bangladesh"
                />

            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MapWithMarker)