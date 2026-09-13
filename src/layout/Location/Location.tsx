import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <AddressTitle>{mapInfo.address1}</AddressTitle>
      <AddressCaption textAlign={'center'}>
        {mapInfo.address2}
        <br />
        <PhoneRow>
          <CallButton href={`tel:${mapInfo.phone}`} aria-label={`${mapInfo.phone}로 전화하기`}>
            <span aria-hidden="true">📞</span>
            전화걸기
          </CallButton>
          <PhoneNumber>{mapInfo.phone}</PhoneNumber>
        </PhoneRow>
      </AddressCaption>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const AddressTitle = styled(PointTitle)`
  color: #000;
  margin-top: 1rem;
`;

const AddressCaption = styled(Caption)`
  margin-top: 0.5rem;
`;

const PhoneRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.35rem;
`;

const CallButton = styled.a`
  padding: 0.25rem 0.55rem;
  border: 1px solid #e88ca6;
  border-radius: 0.4rem;
  background: #fff;
  color: #d87592;
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const PhoneNumber = styled.span`
  color: inherit;
`;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
