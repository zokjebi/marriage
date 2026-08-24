import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  return (
    <ContentsWrap>
      <ImageMoreWrap >
        <PhotoGallery />
      </ImageMoreWrap>
    
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  width: 100%;
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
