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
      zoom={points.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={points.basemap.osm}
      />
      <Marker position={points.office.coords} icon={icon}>
        <Popup position={points.office.coords}>
          <div className='d-flex flex-column align-items-center'>
            <img
              width='200'
              src='/images/logo.jpg'
              alt='Оффис ООО "Про-движение"'
            />
            <p className='text-muted'>{points.office.address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Pdsmap

const points = {
  office: {
    name: 'ООО "Про-движение"',
    coords: {
      lat: 53.192835,
      lng: 50.268502,
    },
    phones: ['+72223567687', '+74443567687'],
    address: 'Самарская обл. г. Самара Полевой проезд дом 12',
  },
  zoom: 17,
  basemap: {
    osm: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    hot: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  },
}
