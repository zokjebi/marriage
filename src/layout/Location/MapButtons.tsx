import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { address1, lat, lon, naverMap, kakaoMap } = data.mapInfo;

  const openTMap = () => {
    const goalName = encodeURIComponent(address1);
    const deepLink = `tmap://route?goalname=${goalName}&goalx=${lon}&goaly=${lat}`;
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const storeUrl = isIOS
      ? 'https://apps.apple.com/kr/app/tmap/id431589174'
      : 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku';

    const fallbackTimer = window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.location.href = storeUrl;
      }
    }, 1500);

    const cancelFallback = () => {
      if (document.visibilityState === 'hidden') {
        window.clearTimeout(fallbackTimer);
        document.removeEventListener('visibilitychange', cancelFallback);
      }
    };

    document.addEventListener('visibilitychange', cancelFallback);
    window.location.href = deepLink;
  };

  return (
    <MapButtonWrapper>
      <MapButton onClick={openTMap}>
        <ServiceIcon service="tmap" aria-hidden="true">T</ServiceIcon>
        티맵
      </MapButton>
      <MapButton onClick={() => window.open(naverMap)}>
        <ServiceIcon service="naver" aria-hidden="true">N</ServiceIcon>
        네이버 지도
      </MapButton>
      <MapButton onClick={() => window.open(kakaoMap)}>
        <ServiceIcon service="kakao" aria-hidden="true">K</ServiceIcon>
        카카오맵
      </MapButton>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  width: 100%;
  margin: 8px 0;
  padding: 0 4px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  justify-content: center;

  @media screen and (max-width: 420px) {
    gap: 5px;
    padding: 0 2px;
  }
`;

const MapButton = styled(Button)`
  gap: 6px;
  min-width: 0;
  flex: 1 1 0;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;

  @media screen and (max-width: 420px) {
    gap: 4px;
    padding: 0.5em 0.3em;
    font-size: clamp(0.72rem, 3.4vw, 0.86rem);
  }
`;

const ServiceIcon = styled.span<{ service: 'tmap' | 'naver' | 'kakao' }>`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  font-size: 12px;
  font-weight: 800;
  line-height: 1;
  color: ${({ service }) => (service === 'kakao' ? '#191919' : '#ffffff')};
  background-color: ${({ service }) => {
    if (service === 'tmap') return '#ff3347';
    if (service === 'naver') return '#03c75a';
    return '#fee500';
  }};

  @media screen and (max-width: 420px) {
    width: 18px;
    height: 18px;
    flex-basis: 18px;
    border-radius: 5px;
    font-size: 11px;
  }
`;
