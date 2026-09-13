import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>
        {greeting.title.split(/(류동엽|손서연)/).map((text, index) =>
          text === '류동엽' || text === '손서연' ? (
            <Name key={index}>{text}</Name>
          ) : (
            text
          ),
        )}
      </MainTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const Name = styled.strong`
  font-weight: 700;
  font-synthesis: weight;
`;

