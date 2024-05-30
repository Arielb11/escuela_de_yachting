import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const center = {
  lat: -31.392431003662576,
  lng: -64.46701446109607
};

const Mapa = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDaF_pjgarnsf9zIUlfNxtXimjRORD9Rxk"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="relative  h-96 sm:h-[500px] lg:h-[600px]">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : <></>;
}

export default React.memo(Mapa);