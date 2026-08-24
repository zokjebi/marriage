import styled from '@emotion/styled';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  return (
    <Gallery>
      <GalleryGrid>
        {images.slice(0, 8).map((image) => (
          <Item
            key={image.alt}
            cropped
            original={image.source}
            thumbnail={image.source}
            width="1280"
            height="1920">
            {({ ref, open }) => (
              <GalleryImage
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                src={image.source}
                alt={image.alt}
                onClick={open}
              />
            )}
          </Item>
        ))}
      </GalleryGrid>
    </Gallery>
  );
};

export default PhotoGallery;

const GalleryGrid = styled.div`
  width: min(100%, 460px);
  padding: 0 4px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
`;
