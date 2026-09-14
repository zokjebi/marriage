import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '300px',
      }}>
      <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lon)}
        defaultZoom={14}
        zoomControl={true}
        draggable={true}
        pinchZoom={false}
        scrollWheel={false}
        keyboardShortcuts={false}>
        <Marker
          defaultPosition={new navermaps.LatLng(lat, lon)}
          icon={{
            content: `
              <div style="position: relative; width: 160px; height: 86px;">
                <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); padding: 7px 10px; border: 1px solid #e88ca6; border-radius: 8px; background: #fff; color: #2f2120; font-size: 12px; font-weight: 700; white-space: nowrap; box-sizing: border-box;">
                  노비아갈라 전자관점
                  <span style="position: absolute; left: 50%; bottom: -5px; width: 8px; height: 8px; transform: translateX(-50%) rotate(45deg); border-right: 1px solid #e88ca6; border-bottom: 1px solid #e88ca6; background: #fff;"></span>
                </div>
                <svg width="32" height="40" viewBox="0 0 32 40" style="position: absolute; left: 50%; top: 42px; transform: translateX(-50%); filter: drop-shadow(0 2px 3px rgba(47,33,32,0.35));">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24s16-12 16-24C32 7.163 24.837 0 16 0z" fill="#e88ca6" stroke="#fff" stroke-width="1.5"/>
                  <circle cx="12.5" cy="14" r="5" fill="none" stroke="#fff" stroke-width="1.8"/>
                  <circle cx="19.5" cy="14" r="5" fill="none" stroke="#fff" stroke-width="1.8"/>
                </svg>
              </div>
            `,
            size: new navermaps.Size(160, 86),
            anchor: new navermaps.Point(82, 87),
          }}
        />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
