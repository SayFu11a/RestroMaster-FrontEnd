import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [43.319055, 45.69004]; // Координаты центра карты

const LeafletMapComponent = () => {
   return (
      <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         />
         <Marker position={position}>
            <Popup>Мы здесь!</Popup>
         </Marker>
      </MapContainer>
   );
};

export default LeafletMapComponent;
