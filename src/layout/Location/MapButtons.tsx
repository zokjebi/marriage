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
      <Button onClick={openTMap}>티맵</Button>
      <Button onClick={() => window.open(naverMap)}>네이버 지도</Button>
      <Button onClick={() => window.open(kakaoMap)}>카카오맵</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
