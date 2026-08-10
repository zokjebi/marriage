import styled from '@emotion/styled';
import data from 'data.json';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import Calendar from '@/layout/WeddingDate/Calendar.tsx';
import WeddingDday from '@/layout/WeddingDate/WeddingDday.tsx';

dayjs.extend(utc);

const Invitation = () => {
  const { greeting } = data;

  const eventDetails = {
    title: '이정환 \uD83D\uDC8D 이서진 결혼식',
    startDateTime: dayjs('2025-5-15 17:00').utc().format('YYYYMMDDTHHmmss') + 'Z',
    endDateTime: dayjs('2024-5-15 18:00').utc().format('YYYYMMDDTHHmmss') + 'Z',
    details: greeting.message,
    location: '여의도 더파티움',
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDateTime}/${eventDetails.endDateTime}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml`;

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <Calendar />
      <WeddingDday />
      <RoundButton
        target="_blank"
        href={googleCalendarUrl}
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
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
