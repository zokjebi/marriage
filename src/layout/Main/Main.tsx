import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImageFrame>
        <MainImg src={mainImg} />
      </MainImageFrame>
      <MainTitle>{greeting.title}</MainTitle>      
    </div>
  );
};

export default Main;

const MainImageFrame = styled.div`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  aspect-ratio: 3 / 4;
  margin: 20px auto 0;
  overflow: hidden;
`;

const MainImg = styled.img`
  display: block;
  width: 115%;
  max-width: none;
  transform: translateX(-10%);
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

