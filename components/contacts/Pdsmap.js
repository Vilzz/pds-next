import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const icon = Leaflet.icon({
  iconUrl: '/icons/marker-icon.png',
  iconRetinaUrl: '/icons/marker-icon-2x.png',
  shadowUrl: '/icons/marker-shadow.png',
})
const Pdsmap = () => {
  return (
    <MapContainer
      center={[53.192835, 50.268502]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={points.basemap.osm}
      />
      {/* <Marker position={points.office.coords}>
        <Popup>{points.office.name}</Popup>
      </Marker> */}
    </MapContainer>
    // <Map zoom={mapData.zoom} center={mapData.point.coords}>
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    //     url={mapData.basemap}
    //   />
    //   <Marker position={mapData.point.coords}>
    //     <Popup>
    //       <img src='/images/logo.jpg' alt='alt' />
    //       <h3>{mapData.point.name}</h3>
    //     </Popup>
    //   </Marker>
    // </Map>
  )
}

export default Pdsmap

const points = {
  office: {
    name: 'Офис',
    coords: {
      lat: 53.192835,
      lng: 50.268502,
    },
    phones: ['+72223567687', '+74443567687'],
    address: 'Самарская обл. г. Самара Полевой проезд дом 12',
  },
  warhouse: {
    name: 'Производство',
    coords: {
      lat: 53.192835,
      lng: 50.268502,
    },
    phones: ['+76663567687', '+75553567687'],
    address: 'Самарская обл. г. Самара Полевой проезд дом 12',
  },
  zoom: 15,
  basemap: {
    osm: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    hot: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  },
}
