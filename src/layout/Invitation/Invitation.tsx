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
    title: '류동엽 \uD83D\uDC8D 손서연 결혼식',
    startDateTime: dayjs('2026-11-28 16:30').utc().format('YYYYMMDDTHHmmss') + 'Z',
    endDateTime: dayjs('2026-11-28 17:30').utc().format('YYYYMMDDTHHmmss') + 'Z',
    details: greeting.message,
    location: '대구 노비아갈라웨딩 전자관점',
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDateTime}/${eventDetails.endDateTime}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml`;

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <EventDetail textAlign={'center'}>{greeting.eventDetail}</EventDetail>
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

const EventDetail = styled(Caption)`
  font-size: 1.15rem;
  font-weight: 700;
  font-synthesis: weight;
  line-height: 1.8;
`;
