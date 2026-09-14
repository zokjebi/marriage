import { useRef } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();
  const mapRef = useRef<naver.maps.Map | null>(null);

  const moveToVenue = () => {
    mapRef.current?.setCenter(new navermaps.LatLng(lat, lon));
    mapRef.current?.setZoom(14);
  };

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '300px',
      }}>
      <NaverMap
        ref={mapRef}
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
      <VenueButton type="button" onClick={moveToVenue}>
        <span aria-hidden="true">📍</span>
        노비아갈라 전자관점
      </VenueButton>
    </MapDiv>
  );
};

export default Map;

const VenueButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transform: translateX(-50%);
  padding: 0.45rem 0.75rem;
  border: 1px solid #e88ca6;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: #2f2120;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(47, 33, 32, 0.2);
  cursor: pointer;
`;
