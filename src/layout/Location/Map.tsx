import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';
import weddingCoupleMarker from '@/assets/icons/wedding-couple-marker.png';

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
        <Marker
          defaultPosition={new navermaps.LatLng(lat, lon)}
          icon={{
            content: `
              <div style="position: relative; width: 160px; height: 90px;">
                <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); padding: 7px 10px; border: 1px solid #e88ca6; border-radius: 8px; background: #fff; color: #2f2120; font-size: 12px; font-weight: 700; white-space: nowrap; box-sizing: border-box;">
                  노비아갈라 전자관점
                  <span style="position: absolute; left: 50%; bottom: -5px; width: 8px; height: 8px; transform: translateX(-50%) rotate(45deg); border-right: 1px solid #e88ca6; border-bottom: 1px solid #e88ca6; background: #fff;"></span>
                </div>
                <img src="${weddingCoupleMarker}" alt="" style="position: absolute; left: 56px; top: 34px; width: 48px; height: 56px;" />
              </div>
            `,
            size: new navermaps.Size(160, 90),
            anchor: new navermaps.Point(82, 85),
          }}
        />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
