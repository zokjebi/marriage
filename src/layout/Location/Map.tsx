import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();
  const centerLatitude = lat - 0.0007;
  const centerLongitude = lon + 0.00191;

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '300px',
      }}>
      <NaverMap
        defaultCenter={new navermaps.LatLng(centerLatitude, centerLongitude)}
        defaultZoom={16}
        zoomControl={false}
        draggable={false}
        pinchZoom={false}
        scrollWheel={false}
        keyboardShortcuts={false}>
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
