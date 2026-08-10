import dayjs from 'dayjs';

const Calendar = () => {
  const year = 2024;
  const month = 10; // 11월은 10번째 인덱스 (0부터 시작하기 때문)

  const startOfMonth = dayjs(new Date(year, month, 1));
  const endOfMonth = dayjs(new Date(year, month + 1, 0));

  const daysInMonth = endOfMonth.date(); // 해당 월의 총 일수
  const startDay = startOfMonth.day(); // 해당 월 1일의 요일 (0: 일요일, 6: 토요일)

  // 빈 칸 채우기
  const blankDays = Array.from({ length: startDay }).map((_, i) => (
    <div key={`blank-${i}`} className="common-calendar-date"><span></span><span></span></div>
  ));

  // 날짜 채우기
  const days = Array.from({ length: daysInMonth }).map((_, i) => {
    const date = i + 1;
    const isToday = date === 23;
    return (
      <div key={date} className="common-calendar-date">
        <span className={isToday ? "d-day" : ""}>{date}</span>
        <span className={isToday ? "mark" : ""}></span>
      </div>
    );
  });

  // 달력 배열 결합
  const calendarDays = [...blankDays, ...days];
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <div className="schedule-calendar-wrapper">
      <div className="common-calendar">
        <div className="common-calendar-table">
          <div className="common-calendar-week">
            <div className="common-calendar-day">일</div>
            <div className="common-calendar-day">월</div>
            <div className="common-calendar-day">화</div>
            <div className="common-calendar-day">수</div>
            <div className="common-calendar-day">목</div>
            <div className="common-calendar-day">금</div>
            <div className="common-calendar-day">토</div>
          </div>
          {weeks.map((week, index) => (
            <div key={index} className="common-calendar-week">
              {week}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
