import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';

const MapWrapper = ({ stores }) => {
  const markers = stores.map(
    ({ location: { lat, long, id, address_three }, phone_number }) => (
      <Marker key={id} position={[lat, long]}>
        <Popup>
          Payzone. <br /> {`${address_three} ${phone_number}`}
        </Popup>
      </Marker>
    ),
  );

  return (
    <>
      {/* <img src="/map.png" alt="" /> */}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {markers}
      </MapContainer>
    </>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MapWrapper);
