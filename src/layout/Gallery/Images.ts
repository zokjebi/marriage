import image03 from '@/assets/images/03.jpg';
import image06 from '@/assets/images/06.jpg';
import image05 from '@/assets/images/05.jpg';
import image04 from '@/assets/images/04.jpg';
import image08 from '@/assets/images/08.jpg';
import image01 from '@/assets/images/01.jpg';
import image02 from '@/assets/images/02.jpg';
import image07 from '@/assets/images/07.jpg';

const {userAgent} = navigator
const isMobile = userAgent.match(/(iPhone|Android)/)

const height = isMobile ? '130px' : '150px'
const wideWidth = isMobile ? '160px' : '200px'
const width = isMobile ? '70px' : '100px'

const images = [
  /* 이미지 경로를 리스트로 저장 */
  {
    alt: 'image01',
    source: image01,
    width: width,
    height: height,
    previewWidth: '1280',
    previewHeight: '1920',
  },
  {
    alt: 'image02',
    source: image02,
    width: wideWidth,
    height: height,
    previewWidth: '1920',
    previewHeight: '1280',
  },
  {
    alt: 'image03',
    source: image03,
    width: wideWidth,
    height: height,
    previewWidth: '1920',
    previewHeight: '1280',
  },
  {
    alt: 'image04',
    source: image04,
    width: width,
    height: height,
    previewWidth: '1280',
    previewHeight: '1920',
  },
  {
    alt: 'image05',
    source: image05,
    width: width,
    height: height,
    previewWidth: '1280',
    previewHeight: '1920',
  },
  {
    alt: 'image06',
    source: image06,
    width: wideWidth,
    height: height,
    previewWidth: '1920',
    previewHeight: '1280',
  },
  {
    alt: 'image07',
    source: image07,
    width: wideWidth,
    height: height,
    previewWidth: '1920',
    previewHeight: '1280',
  },
  {
    alt: 'image08',
    source: image08,
    width: width,
    height: height,
    previewWidth: '1280',
    previewHeight: '1920',
  }
];

export default images;
