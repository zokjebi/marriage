import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import Calendar from '@/layout/WeddingDate/Calendar.tsx';
import WeddingDday from '@/layout/WeddingDate/WeddingDday.tsx';

const Invitation = () => {
  const { greeting } = data;

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <EventDetail textAlign={'center'}>{greeting.eventDetail}</EventDetail>
      <Calendar />
      <WeddingDday />      
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const EventDetail = styled(Caption)`
  font-size: 1.15rem;
  font-weight: 700;
  font-synthesis: weight;
  line-height: 1.8;
`;
