'use client';

import useWindowSize from '@/app/hook/useWindowSize';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://i2-prod.liverpoolecho.co.uk/incoming/article26829395.ece/ALTERNATES/s1200/1_County-Cat-Rescue-and-Sanctuary-in-Walton-Photo-by-Colin-Lane.jpg',
  },
  {
    url: 'https://post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1200x628-facebook-1200x628.jpg',
  },
  {
    url: 'https://i.cbc.ca/1.6652034.1668528383!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/oscar-the-cat.jpg',
  },
];

export default function ImgSlider() {
  const [width] = useWindowSize();

  return (
    <div>
      {width ? (
        <SimpleImageSlider
          width={width > 450 ? '450px' : '100%'}
          height={220}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay
        />
      ) : (
        <div className="h-[220px] w-full bg-[#E8F5FF]" />
      )}
    </div>
  );
}

// maxWidth 프로퍼티가 존재하지 않음 className이나 style로 해결해 볼려고 했으나 실패
// 따라서 윈도우 객체의 resize 이벤트를 사용함
// resize 이벤트 등록하는데에 걸리는 시간 동안 자리를 채울 빈 div 추가
