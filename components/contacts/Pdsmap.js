import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const icon = Leaflet.icon({
  iconUrl: '/images/icons/marker-icon.png',
  iconRetinaUrl: '/images/icons/marker-icon-2x.png',
  shadowUrl: '/images/icons/marker-shadow.png',
})
const Pdsmap = () => {
  return (
    <MapContainer
      center={points.office.coords}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={points.basemap.osm}
      />
      <Marker position={points.office.coords} icon={icon}>
        <Popup>{points.office.name}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Pdsmap

const points = {
  office: {
    name: 'Про-движение',
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
