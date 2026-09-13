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
      <AddressCaption textAlign={'center'}>{mapInfo.address2}</AddressCaption>
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

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
