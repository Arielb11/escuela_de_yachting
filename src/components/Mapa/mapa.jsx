import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './mapa.css';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

let iconUbicacion = new L.icon({
  iconUrl: '../assets/img/localizacion.png',
  iconSize: [60, 55],
});

const Mapa = () => {
  return (
    <MapContainer center={[-31.392417982436534, -64.46696861526692]} zoom={15} scrollWheelZoom={false} className='mapa'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-31.392417982436534, -64.46696861526692]} icon={iconUbicacion}>
    <Popup>
    Escuela de Yachting del Club Náutico Córdoba
    </Popup>
  </Marker>
</MapContainer>
  )
}

export default Mapa;