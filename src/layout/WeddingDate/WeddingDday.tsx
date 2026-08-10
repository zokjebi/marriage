import { useEffect, useState } from 'react';
import data from 'data.json';
import dayjs from 'dayjs';

const WeddingDday = () => {
  const { date } = data;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    const targetDate = dayjs(date.weddingDate);

    const updateCountdown = () => {
      const now = dayjs();
      const diff = targetDate.diff(now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // 초기 계산
    updateCountdown();

    // 1초마다 업데이트
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="schedule-wedding-d-day-wrapper">
      <div className="common-wedding-date">
        <p className="wedding-duration-text">D-Day</p>
        <div className="wedding-duration-counter">
          <div className="item">
            <p className="digit">{timeLeft.days}</p>
            <p className="unit">일</p>
          </div>
          <div className="item">
            <p className="digit">{timeLeft.hours}</p>
            <p className="unit">시간</p>
          </div>
          <div className="item">
            <p className="digit">{timeLeft.minutes}</p>
            <p className="unit">분</p>
          </div>
          <div className="item">
            <p className="digit">{timeLeft.seconds}</p>
            <p className="unit">초</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingDday;
