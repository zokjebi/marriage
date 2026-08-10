import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  return (
    <Gallery>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[0].source}
                thumbnail={images[0].source}
                height={images[0].previewHeight}
                width={images[0].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[0].width,
                      height: images[0].height,
                    }}
                    alt={images[0].alt}
                    src={images[0].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[1].source}
                thumbnail={images[1].source}
                height={images[1].previewHeight}
                width={images[1].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[1].width,
                      height: images[1].height,
                    }}
                    alt={images[1].alt}
                    src={images[1].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[2].source}
                thumbnail={images[2].source}
                height={images[2].previewHeight}
                width={images[2].previewWidth}
              >
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[2].width,
                      height: images[2].height,
                    }}
                    alt={images[2].alt}
                    src={images[2].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[3].source}
                thumbnail={images[3].source}
                height={images[3].previewHeight}
                width={images[3].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[3].width,
                      height: images[3].height,
                    }}
                    alt={images[3].alt}
                    src={images[3].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[4].source}
                thumbnail={images[4].source}
                height={images[4].previewHeight}
                width={images[4].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[4].width,
                      height: images[4].height,
                    }}
                    alt={images[4].alt}
                    src={images[4].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[5].source}
                thumbnail={images[5].source}
                height={images[5].previewHeight}
                width={images[5].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[5].width,
                      height: images[5].height,
                    }}
                    alt={images[5].alt}
                    src={images[5].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[6].source}
                thumbnail={images[6].source}
                height={images[6].previewHeight}
                width={images[6].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[6].width,
                      height: images[6].height,
                    }}
                    alt={images[6].alt}
                    src={images[6].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                margin: '0 5px',
              }}>
              <Item
                cropped
                original={images[7].source}
                thumbnail={images[7].source}
                height={images[7].previewHeight}
                width={images[7].previewWidth}>
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      width: images[7].width,
                      height: images[7].height,
                    }}
                    alt={images[7].alt}
                    src={images[7].source}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
